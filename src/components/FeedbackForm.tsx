import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  rating: number;
  favoriteDrink: string;
  experience: string;
  comments: string;
  recommend: string;
}

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    rating: 0,
    favoriteDrink: '',
    experience: '',
    comments: '',
    recommend: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        rating: 0,
        favoriteDrink: '',
        experience: '',
        comments: '',
        recommend: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-card rounded-lg p-8 text-center border border-border">
        <div className="text-6xl mb-4">☕</div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
        <p className="text-muted-foreground">
          Your feedback helps us brew better experiences for everyone.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-card rounded-lg p-8 border border-border">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">☕</div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Coffee Shop Feedback</h1>
        <p className="text-muted-foreground">Tell us about your experience!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Overall Rating
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="text-2xl transition-colors hover:scale-110 transform transition-transform"
              >
                <span
                  className={`${
                    star <= (hoveredStar || formData.rating)
                      ? 'text-accent'
                      : 'text-muted'
                  }`}
                >
                  ⭐
                </span>
              </button>
            ))}
          </div>
          {formData.rating > 0 && (
            <p className="text-sm text-muted-foreground mt-1">
              {formData.rating === 1 && "Poor"}
              {formData.rating === 2 && "Fair"}
              {formData.rating === 3 && "Good"}
              {formData.rating === 4 && "Very Good"}
              {formData.rating === 5 && "Excellent"}
            </p>
          )}
        </div>

        {/* Favorite Drink */}
        <div>
          <label htmlFor="favoriteDrink" className="block text-sm font-medium text-foreground mb-2">
            Favorite Drink
          </label>
          <select
            id="favoriteDrink"
            name="favoriteDrink"
            value={formData.favoriteDrink}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          >
            <option value="">Select your favorite...</option>
            <option value="espresso">Espresso</option>
            <option value="americano">Americano</option>
            <option value="latte">Latte</option>
            <option value="cappuccino">Cappuccino</option>
            <option value="macchiato">Macchiato</option>
            <option value="mocha">Mocha</option>
            <option value="frappuccino">Frappuccino</option>
            <option value="tea">Tea</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
            How was your experience?
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          >
            <option value="">Select...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-foreground mb-2">
            Comments & Suggestions
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            placeholder="Tell us what you loved or how we can improve..."
          />
        </div>

        {/* Recommend */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Would you recommend us to a friend?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="recommend"
                value="yes"
                checked={formData.recommend === 'yes'}
                onChange={handleInputChange}
                className="mr-2 text-primary focus:ring-ring"
                required
              />
              <span className="text-foreground">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="recommend"
                value="no"
                checked={formData.recommend === 'no'}
                onChange={handleInputChange}
                className="mr-2 text-primary focus:ring-ring"
              />
              <span className="text-foreground">No</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;