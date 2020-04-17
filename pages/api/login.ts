import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import { secret } from '../../api/secret';
import cookie from 'cookie';


export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const db = await sqlite.open('./mydb.sqlite');

  if (req.method === 'POST') {
    const user = await db.get('select * from Users where email = ?', [
      req.body.email
    ]);

    compare(req.body.password, user.password, function (err, result) {
      if (!err && result) {
        const claims = { sub: user.id, myPersonEmail: user.email };
        const jwt = sign(claims, secret);
        res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 3600,
          path: '/'
        }))
        res.json({ valid: true });
      } else {
        res.json({ message: 'Oops, une erreur est survenue!' });
      }
    });
  } else {
    res.status(405).json({ message: 'seules les méthodes \'POST\' sont autorisées' });
  }
}