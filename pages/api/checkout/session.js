import { NextApiRequest, NextApiResponse } from "next";



export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'Mert Efe'})
}
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});