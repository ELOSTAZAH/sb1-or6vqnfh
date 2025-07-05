# 🎨 Capsule Zone - Coloring App for Autism

A beautiful, free, and open-source coloring app specifically designed for autistic children and their families. This app provides a calm, educational, and joyful coloring experience with numbered guides, nature sounds, and reward systems.

## ✨ Features

### 🎨 **Core Coloring Experience**
- **Split-screen design**: Reference image (left) and numbered coloring areas (right)
- **Numbered coloring guides** (1-20 areas) for easy following
- **Huge color palette** with 26+ vibrant colors
- **4 different pen types**: Thin, Normal, Thick, and Big brushes
- **Progress tracking** with golden stars and completion percentages
- **Reward system** with stars ⭐ and flowers 🌸

### 📚 **Educational Categories**
- **Animals** 🐱 - Learn about cute animals while coloring
- **Vegetables** 🥕 - Discover healthy vegetables
- **Fruits** 🍎 - Explore delicious fruits

### 🎵 **Sensory Features**
- **Calm nature sounds** - Birds, water, and peaceful ambiance
- **Audio controls** - Toggle sounds and music on/off
- **Gentle vibration feedback** (mobile only)
- **Visual celebrations** for completed areas

### 📁 **Upload & Customization**
- **Upload your own pictures** - Support for images and PDFs
- **Family customization** - Add personal coloring pages
- **File management** - Easy organization of uploaded content

### 🏆 **Progress & Achievements**
- **Achievement system** with colorful badges
- **Category progress tracking**
- **Daily streak counters**
- **Star collection system**
- **Encouraging messages** and celebrations

### 🛡️ **Open Source & Legal**
- **Completely free** - No ads, no purchases, no subscriptions
- **Open source license** with copyright protection
- **Password-protected licensing** system
- **Family-friendly** and safe for children

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI

### Installation

1. **Clone or download this repository**
```bash
git clone [your-repo-url]
cd capsule-zone
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in your browser or mobile device**
- Web: Open the provided localhost URL
- Mobile: Scan the QR code with Expo Go app

## 📱 Building for Production

### Web Deployment
```bash
npm run build:web
```

### Mobile App (Android/iOS)
1. Create an Expo account at https://expo.dev
2. Install EAS CLI: `npm install -g @expo/eas-cli`
3. Build for Android: `eas build --platform android`
4. Build for iOS: `eas build --platform ios`

## 🎨 Design Philosophy

This app is specifically designed for autistic children with:

- **Calm, pastel color schemes** to reduce overstimulation
- **Clear visual hierarchy** with bold, readable fonts
- **Predictable navigation** with consistent layouts
- **Gentle animations** and smooth transitions
- **Large touch targets** for easy interaction
- **High contrast** for accessibility
- **Rounded corners** for visual safety

## 🔧 Technical Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Styling**: StyleSheet with custom design system
- **Icons**: Lucide React Native
- **Images**: Pexels integration for educational content
- **File Upload**: Expo Document Picker
- **Audio**: Expo AV (for future sound implementation)
- **Gradients**: Expo Linear Gradient

## 📂 Project Structure

```
app/
├── (tabs)/                 # Tab navigation screens
│   ├── index.tsx          # Home screen
│   ├── coloring.tsx       # Category selection
│   ├── upload.tsx         # File upload
│   ├── progress.tsx       # Achievement tracking
│   └── settings.tsx       # App settings
├── coloring/
│   └── [id].tsx          # Individual coloring pages
├── license.tsx           # License management
└── _layout.tsx          # Root layout

hooks/
└── useFrameworkReady.ts  # Framework initialization

assets/
├── images/
│   ├── icon.png         # App icon
│   └── favicon.png      # Web favicon
```

## 🎯 Target Audience

- **Primary**: Autistic children (ages 3-12)
- **Secondary**: Parents, caregivers, and educators
- **Tertiary**: Special needs communities and families

## 🌟 Accessibility Features

- **Screen reader compatible** text and labels
- **High contrast** color combinations
- **Large touch targets** (minimum 44px)
- **Clear visual feedback** for all interactions
- **Consistent navigation** patterns
- **Reduced motion** options (future enhancement)

## 🤝 Contributing

This is an open-source project! Families and developers are welcome to:

- Add new coloring pages and categories
- Improve accessibility features
- Translate to different languages
- Enhance the user interface
- Fix bugs and improve performance

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under a custom open-source license that:

- ✅ **Allows**: Free use, modification, and distribution
- ✅ **Permits**: Educational and therapeutic applications
- ✅ **Encourages**: Community improvements and contributions
- ❌ **Prohibits**: Commercial sale without written permission
- 🔒 **Protects**: Original copyright and attribution

See the `LICENSE.md` file for full details.

## 🛡️ Copyright Protection

The license includes a password-protected system that allows the original creator to:
- Maintain copyright ownership
- Prevent unauthorized commercial use
- Grant commercial licensing permissions
- Protect against exploitation

## 🎉 Acknowledgments

- **Pexels** for providing beautiful, free educational images
- **Expo team** for the amazing development platform
- **Lucide** for the comprehensive icon library
- **Autism community** for inspiration and feedback
- **Open source contributors** who make projects like this possible

## 📞 Support & Contact

For support, questions, or commercial licensing:
- Email: [elostazahx@gmail.com]
- Issues: Use GitHub Issues for bug reports
- Discussions: Use GitHub Discussions for questions

## 🌈 Mission Statement

"To provide a free, accessible, and joyful coloring experience that helps autistic children learn, grow, and express their creativity while supporting families and communities worldwide."

---

**Made with ❤️ for the autism community**

*This app is completely free and will always remain free. No ads, no tracking, no subscriptions - just pure coloring joy for amazing kids!* 🎨✨
