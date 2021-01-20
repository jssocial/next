import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const stripePromise = loadStripe('pk_test_51IAxBBFohMdWB0RA1cAgNJHoEqbERlO2Inw3J4JZF0X3zPuWlqWfQW91Ek93uIqlbaQ1Wux2qi8IrUL7jHkwldRR00TkHjBraN');

export default function Checkout() {
  return (
    <div className="checkout-div">
      <Nav />

      <div>
        <button role="link">
          Checkout
        </button>
      </div>
      
      <Footer />
    </div>
  );
}
