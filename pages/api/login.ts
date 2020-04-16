import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await sqlite.open('./mydb.sqlite');
    const users = await db.all('SELECT * FROM Users');
    const credentials = {email:'user@domain.tld', password:'hello'};


    if ( Object.is(req.body, credentials) ) {
  
            return res.json({valid: true});
     
    } else {
        return res.json(credentials);
    }
}
