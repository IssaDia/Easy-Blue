import { NextApiRequest, NextApiResponse } from 'next';

const credentials = {
    email: "user@domain.tld",
    password: "123456789"
};



export default (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {
  
            return res.json({valid : true});
     
    } else {
        return res.status(405).send('Invalid method');
    }
}
