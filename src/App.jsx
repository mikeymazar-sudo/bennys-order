import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Beef, Flame, Award, ChefHat } from 'lucide-react';
import './App.css';

const BurgerSection = ({ title, description, image, ingredients, id, icon: Icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div id={id} className="burger-section" ref={ref}>
      <div className={`burger-content ${inView ? 'visible' : ''}`}>

        {/* Title and Description */}
        <div className="burger-header">
          <h2 className="burger-title">
            <Icon size={40} style={{ display: 'inline', marginRight: '1rem', verticalAlign: 'bottom', color: 'var(--color-secondary)' }} />
            {title}
          </h2>
          <p className="burger-description">{description}</p>
        </div>

        {/* Image Layout */}
        <div className="burger-image-container">
          <img src={image} alt={title} className="burger-image" />
        </div>

        {/* Ingredients */}
        <div className="burger-ingredients">
          <h3 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Ingredients</h3>
          <ul className="ingredients-list">
            {ingredients.map((item, idx) => (
              <li key={idx} className="ingredient-item">
                <span className="ingredient-bullet"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

function App() {
  const scrollToMenu = () => {
    document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' });
  };

  const burgers = [
    {
      id: 'oklahoma',
      title: 'Oklahoma Smash',
      description: 'A true classic. Thinly sliced onions smashed right into the beef patty, creating an irresistible caramelized crust.',
      image: '/oklahoma-smash.jpg',
      icon: Flame,
      ingredients: ['Toasted Bun (Top)', 'Pickles', 'American Cheese', 'Smashed Patty with Onions', 'Mustard', 'Toasted Bun (Bottom)']
    },
    {
      id: 'miami',
      title: 'Miami Spice',
      description: 'Turn up the heat with our signature spicy sensation featuring smashed jalapeños and pepperjack cheese.',
      image: '/miami-spice.jpg',
      icon: Flame,
      ingredients: ['Toasted Bun (Top)', "Benny's Secret Sauce", 'Pepperjack Cheese', 'Smashed Jalapeños', 'Smashed Beef Patty', "Benny's Secret Sauce", 'Toasted Bun (Bottom)']
    },
    {
      id: 'classic',
      title: 'Classic Smash',
      description: 'Our staple burger, packed with fresh ingredients and our famous secret sauce.',
      image: '/classic-smash.jpg',
      icon: Award,
      ingredients: ['Toasted Bun (Top)', 'Secret Sauce', 'Pickles', 'Diced Onions', 'Tomato', 'Lettuce', 'American Cheese', 'Smashed Patty', 'Secret Sauce', 'Toasted Bun (Bottom)']
    },
    {
      id: 'slider',
      title: 'Classic Slider',
      description: 'Crispy, crunchy, and packed with flavor. The perfect chicken sandwich compressed into a slider.',
      image: '/classic-slider.jpg',
      icon: ChefHat,
      ingredients: ['Toasted Bun (Top)', 'Choice of Sauce', 'Pickles', 'Diced Onion', 'Tomato', 'Lettuce', 'Crispy Chicken', 'Choice of Sauce', 'Toasted Bun (Bottom)']
    }
  ];

  return (
    <div className="app-container">
      {/* Top Banner */}
      <div className="top-banner">
        Order for HCA Florida Westside Hospital
      </div>

      {/* Header */}
      <header className="header" style={{ top: '40px' }}>
        <div className="logo-container">
          <img
            src="/logo.jpg"
            alt="Benny's Logo"
            className="logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
              document.getElementById('fallback-text-logo').style.display = 'flex';
            }}
          />
          <h1 className="header-title">Benny's Smash Burgers</h1>

          <div id="fallback-text-logo" style={{ display: 'none', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h1 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', lineHeight: '1', textShadow: '1px 1px 0px var(--color-secondary)' }}>
              Benny's
            </h1>
            <span style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Smash Burgers
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>100% Black Angus Beef</h1>
        <p>Premium smash burgers crafted to perfection. Experience the crunch, the juiciness, and the unforgettable flavor of Benny's.</p>
        <button className="nav-cta" onClick={scrollToMenu} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
          Explore Your Order
        </button>
        <ChevronDown size={40} className="scroll-indicator" />
      </section>

      {/* Showcase */}
      <main id="showcase" className="showcase-container">
        {burgers.map((burger) => (
          <BurgerSection key={burger.id} {...burger} />
        ))}
      </main>

      {/* Available Sauces Section */}
      <section className="sauces-section" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#111' }}>
        <h2 style={{ color: 'var(--color-secondary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Available Sauces</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div className="sauce-item" style={{ background: '#222', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid var(--color-primary)', minWidth: '150px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Garlic Aioli</span>
          </div>
          <div className="sauce-item" style={{ background: '#222', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid var(--color-primary)', minWidth: '150px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Secret Sauce</span>
          </div>
          <div className="sauce-item" style={{ background: '#222', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid var(--color-primary)', minWidth: '150px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Ketchup</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>Benny's Smash Burgers</h2>
        <p style={{ color: '#ccc', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
          1023 S. University Dr., Plantation, FL 33324
        </p>
        <p style={{ color: 'var(--color-primary)', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
          (954) 999-5568
        </p>
        <p style={{ color: '#888', marginBottom: '1rem' }}>Smashed with Love.</p>
        <p style={{ color: '#555', fontSize: '0.9rem' }}>© {new Date().getFullYear()} Benny's Smash Burgers. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
