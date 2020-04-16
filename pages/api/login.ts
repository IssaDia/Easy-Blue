import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

const credentials = {email:'user@domain.tld', password:'hello'};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open('./mydb.sqlite');
    const users = await db.all('SELECT email, password FROM Users');

    if (Object.is(credentials, req.body) ) {
  
            return res.json({value : true});
     
    } else {
        return res.json(credentials);
    }
}

