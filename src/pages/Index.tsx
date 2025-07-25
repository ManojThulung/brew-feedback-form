import FeedbackForm from '../components/FeedbackForm';
import coffeeBackground from '../assets/coffee-background.jpg';

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-background to-secondary p-4 flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 248, 240, 0.85), rgba(245, 235, 220, 0.85)), url(${coffeeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      <div className="relative z-10">
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Index;
