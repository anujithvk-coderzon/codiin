import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Mobile UI/UX: Design Principles for Great Apps",
  description: "Learn Mobile UI/UX - Master design principles, navigation patterns, and responsive layouts for creating intuitive mobile experiences.",
  keywords: ["mobile UI UX", "design principles", "navigation patterns", "responsive design", "mobile-first design", "user experience"],
  alternates: { canonical: "/hybrid-mobile-app/articles/mobile-ui-ux" },
  openGraph: {
    type: "article",
    url: "/hybrid-mobile-app/articles/mobile-ui-ux",
    title: "Mobile UI/UX: Design Principles for Great Apps",
    description: "Master mobile design principles and create user-friendly applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/hybrid-mobile-app", label: "Learn Hybrid Mobile", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mobile UI/UX: Design Principles for Great Apps",
  "description": "Complete guide to mobile UI/UX design principles",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-24",
  "dateModified": "2024-12-24"
} as const;

export default function HybridMobileAppMobileUiUxPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="article-hero">
          <div className="container">
            <div className="article-breadcrumb">
              <Link href="/">
                {"Home"}
              </Link>
              {" / "}
              <Link href="/hybrid-mobile-app">
                {"Hybrid Mobile App"}
              </Link>
              {" / "}
              <span>
                {"Mobile UI/UX"}
              </span>
            </div>
            <h1>
              {"Mobile UI/UX Design"}
            </h1>
            <p className="article-subtitle">
              {"Create Intuitive and Beautiful Mobile Experiences"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"14 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Mobile UI/UX?"}
                </h2>
                <p>
                  <strong>
                    {"UI (User Interface)"}
                  </strong>
                  {" is what users see and interact with - buttons, colors, fonts, layouts. Think of it as the look and feel of your app, like the interior design of a car."}
                </p>
                <p>
                  <strong>
                    {"UX (User Experience)"}
                  </strong>
                  {" is how users feel when using your app - is it easy? frustrating? delightful? Think of it as how smoothly the car drives and how comfortable the seats are."}
                </p>
                <p>
                  {"Good mobile UI/UX is like a well-designed elevator - users know exactly what to do without instructions, it responds immediately to their actions, and it gets them to their destination efficiently."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Mobile UI/UX Matters"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"First Impressions:"}
                    </strong>
                    {" 94% of first impressions are design-related"}
                  </li>
                  <li>
                    <strong>
                      {"User Retention:"}
                    </strong>
                    {" Good UX increases user retention by 400%"}
                  </li>
                  <li>
                    <strong>
                      {"Conversion Rates:"}
                    </strong>
                    {" Better design can double conversion rates"}
                  </li>
                  <li>
                    <strong>
                      {"App Store Rankings:"}
                    </strong>
                    {" User ratings depend heavily on UX"}
                  </li>
                  <li>
                    <strong>
                      {"Brand Perception:"}
                    </strong>
                    {" Professional design builds trust"}
                  </li>
                  <li>
                    <strong>
                      {"Competitive Advantage:"}
                    </strong>
                    {" Great UX sets you apart"}
                  </li>
                  <li>
                    <strong>
                      {"Reduced Support:"}
                    </strong>
                    {" Intuitive design means fewer help requests"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Mobile-First Thinking"}
                </h2>
                <p>
                  {"Mobile-first means designing for small screens first, then expanding to larger screens. It's like packing a suitcase - you prioritize the essentials first, then add extras if there's room."}
                </p>
                <p>
                  <strong>
                    {"Why Mobile-First?"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Over 60% of web traffic is from mobile devices"}
                  </li>
                  <li>
                    {"Forces you to focus on what's truly important"}
                  </li>
                  <li>
                    {"Easier to scale up than to shrink down"}
                  </li>
                  <li>
                    {"Better performance on all devices"}
                  </li>
                  <li>
                    {"Google prioritizes mobile-first indexing"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Mobile-First Principles:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Content First:"}
                    </strong>
                    {" Show most important content immediately"}
                  </li>
                  <li>
                    <strong>
                      {"Simplify:"}
                    </strong>
                    {" Remove unnecessary elements"}
                  </li>
                  <li>
                    <strong>
                      {"Touch-Friendly:"}
                    </strong>
                    {" Design for fingers, not cursors"}
                  </li>
                  <li>
                    <strong>
                      {"Speed Matters:"}
                    </strong>
                    {" Optimize for slow connections"}
                  </li>
                  <li>
                    <strong>
                      {"Progressive Enhancement:"}
                    </strong>
                    {" Add features for larger screens"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Design Principles"}
                </h2>
                <h3>
                  {"1. The Thumb Zone"}
                </h3>
                <p>
                  {"Most users hold phones with one hand. The thumb zone is where users can comfortably reach without stretching. Think of it like a baseball player's strike zone."}
                </p>
                <div className="code-block">
                  <pre><code>{`Thumb Zone Map:
┌─────────────────┐
│   HARD REACH    │  Top of screen (notifications)
├─────────────────┤
│                 │
│   EASY REACH    │  Middle area (main content)
│                 │
├─────────────────┤
│  NATURAL ZONE   │  Bottom third (navigation, primary actions)
└─────────────────┘

Best Practices:
- Place primary actions (buttons) in bottom third
- Important navigation at bottom (like Instagram, Twitter)
- Less important items at top
- Avoid critical actions in top corners`}</code></pre>
                </div>
                <h3>
                  {"2. Touch Target Sizes"}
                </h3>
                <p>
                  {"Buttons and interactive elements need to be large enough for fingers to tap accurately. Think of them like elevator buttons - too small and you'll press the wrong floor."}
                </p>
                <div className="code-block">
                  <pre><code>{`Minimum Touch Target Sizes:
┌────────────────────────────────┐
│ Minimum:  44x44 px (iOS)       │
│ Optimal:  48x48 px (Android)   │
│ Ideal:    56x56 px or larger   │
└────────────────────────────────┘

Spacing:
- 8px minimum between touch targets
- 16px recommended for better accuracy
- Icons: 24x24px minimum

Example (React Native):
<TouchableOpacity
  style={{
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  }}
>
  <Icon name="heart" size={24} />
</TouchableOpacity>`}</code></pre>
                </div>
                <h3>
                  {"3. Visual Hierarchy"}
                </h3>
                <p>
                  {"Guide users' eyes to the most important elements first. Like a newspaper - headlines are biggest, body text is smaller."}
                </p>
                <div className="code-block">
                  <pre><code>{`Text Hierarchy:
┌──────────────────────────────┐
│ H1: 28-32px (Page title)     │
│ H2: 24-28px (Section title)  │
│ H3: 20-24px (Subsection)     │
│ Body: 16-18px (Main text)    │
│ Caption: 14px (Helper text)  │
│ Small: 12px (Footnotes)      │
└──────────────────────────────┘

Size isn't everything:
- Use weight (bold, medium, regular)
- Use color (primary, secondary, disabled)
- Use spacing (margins, padding)
- Use contrast (background vs foreground)`}</code></pre>
                </div>
                <h3>
                  {"4. White Space (Breathing Room)"}
                </h3>
                <p>
                  {"Empty space around elements makes content easier to read and understand. Think of it like rooms in a house - cluttered rooms are stressful, spacious rooms are calming."}
                </p>
                <ul>
                  <li>
                    {"Don't fill every pixel - let content breathe"}
                  </li>
                  <li>
                    {"Use padding: 16px is a good standard"}
                  </li>
                  <li>
                    {"Group related items with less space, separate unrelated items with more space"}
                  </li>
                  <li>
                    {"White space is not wasted space - it's intentional design"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Navigation Patterns"}
                </h2>
                <h3>
                  {"1. Bottom Tab Navigation"}
                </h3>
                <p>
                  {"Most popular for mobile apps. Easy to reach with thumb. Perfect for 3-5 main sections."}
                </p>
                <div className="code-block">
                  <pre><code>{`When to use:
✓ 3-5 main sections of equal importance
✓ Frequently switching between sections
✓ Need quick access to all sections
✓ Examples: Instagram, Twitter, Facebook

Layout:
┌───────────────────┐
│                   │
│   Main Content    │
│                   │
│                   │
├───┬───┬───┬───┬───┤
│ H │ S │ + │ N │ P │  (Home, Search, Post, Notif, Profile)
└───┴───┴───┴───┴───┘

React Native Example:
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Search" component={SearchScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>`}</code></pre>
                </div>
                <h3>
                  {"2. Hamburger Menu (Drawer)"}
                </h3>
                <p>
                  {"Side menu that slides out. Good for many options, but hides navigation."}
                </p>
                <div className="code-block">
                  <pre><code>{`When to use:
✓ 6+ navigation items
✓ Less frequently accessed sections
✓ Need to preserve screen space
✓ Examples: Gmail, Medium

Avoid when:
✗ Main navigation (use tabs instead)
✗ Critical user flows
✗ Users need quick switching

Layout:
┌─────┬─────────────┐
│ H   │   Settings  │  Slides from left
│ o   │   Profile   │
│ m   │   Help      │
│ e   │   Logout    │
└─────┴─────────────┘`}</code></pre>
                </div>
                <h3>
                  {"3. Gestures"}
                </h3>
                <p>
                  {"Swipes, pinches, long-presses. Natural for mobile but need visual hints."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Swipe:"}
                    </strong>
                    {" Delete email, navigate between screens"}
                  </li>
                  <li>
                    <strong>
                      {"Pull to refresh:"}
                    </strong>
                    {" Update content (social media feeds)"}
                  </li>
                  <li>
                    <strong>
                      {"Pinch to zoom:"}
                    </strong>
                    {" Images, maps"}
                  </li>
                  <li>
                    <strong>
                      {"Long press:"}
                    </strong>
                    {" Show context menu, move items"}
                  </li>
                  <li>
                    <strong>
                      {"Always provide alternative:"}
                    </strong>
                    {" Don't rely only on gestures"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Responsive Layouts"}
                </h2>
                <p>
                  {"Your app should look great on all screen sizes - from small phones to tablets. Think of it like water that adapts to any container."}
                </p>
                <h3>
                  {"Flexbox Layout"}
                </h3>
                <p>
                  {"Flexbox is like organizing items in flexible containers. Items automatically adjust based on available space."}
                </p>
                <div className="code-block">
                  <pre><code>{`// React Native Flexbox Example

// Horizontal layout (Row)
<View style={{
  flexDirection: 'row',      // Items in a row
  justifyContent: 'space-between',  // Space between items
  alignItems: 'center',      // Vertically centered
  padding: 16
}}>
  <Text>Left</Text>
  <Text>Middle</Text>
  <Text>Right</Text>
</View>

// Vertical layout (Column) - Default
<View style={{
  flexDirection: 'column',   // Stack vertically
  flex: 1,                   // Take all available space
  padding: 16
}}>
  <View style={{ flex: 1, backgroundColor: 'red' }} />
  <View style={{ flex: 2, backgroundColor: 'blue' }} />
  <View style={{ flex: 1, backgroundColor: 'green' }} />
</View>

// Responsive grid
<View style={{
  flexDirection: 'row',
  flexWrap: 'wrap',          // Wrap to next line
  justifyContent: 'space-between'
}}>
  {items.map(item => (
    <View style={{
      width: '48%',            // 2 columns with gap
      marginBottom: 16
    }}>
      <Image source={item.image} />
    </View>
  ))}
</View>`}</code></pre>
                </div>
                <h3>
                  {"Handling Different Screen Sizes"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Responsive font sizes
const isSmallDevice = width < 375;
const isMediumDevice = width >= 375 && width < 768;
const isTablet = width >= 768;

const styles = StyleSheet.create({
  title: {
    fontSize: isTablet ? 32 : (isSmallDevice ? 20 : 24)
  },
  container: {
    padding: isTablet ? 32 : 16
  },
  grid: {
    // 1 column on phone, 2 on tablet
    width: isTablet ? '48%' : '100%'
  }
});

// Platform-specific styles
const buttonStyle = {
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
    },
    android: {
      elevation: 4,
    }
  })
};`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Color and Typography"}
                </h2>
                <h3>
                  {"Color Psychology"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Blue:"}
                    </strong>
                    {" Trust, security (Facebook, Twitter, LinkedIn)"}
                  </li>
                  <li>
                    <strong>
                      {"Green:"}
                    </strong>
                    {" Growth, health, money (WhatsApp, Spotify)"}
                  </li>
                  <li>
                    <strong>
                      {"Red:"}
                    </strong>
                    {" Urgency, passion, energy (YouTube, Pinterest)"}
                  </li>
                  <li>
                    <strong>
                      {"Yellow:"}
                    </strong>
                    {" Happiness, optimism, warmth (Snapchat)"}
                  </li>
                  <li>
                    <strong>
                      {"Purple:"}
                    </strong>
                    {" Creativity, luxury (Twitch, Roku)"}
                  </li>
                  <li>
                    <strong>
                      {"Black:"}
                    </strong>
                    {" Sophistication, elegance (Uber, Apple)"}
                  </li>
                </ul>
                <h3>
                  {"Color Accessibility"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Contrast Ratios (WCAG Guidelines):
┌──────────────────────────────────┐
│ Normal text:  4.5:1 minimum      │
│ Large text:   3:1 minimum        │
│ UI elements:  3:1 minimum        │
└──────────────────────────────────┘

Good Practices:
✓ Don't use color alone to convey information
✓ Use icons + color for status (not just red/green)
✓ Test with color blindness simulators
✓ Provide high contrast mode option

Example:
// Bad - relies only on color
<Text style={{ color: 'red' }}>Error</Text>

// Good - icon + color + text
<View style={{ flexDirection: 'row' }}>
  <Icon name="alert-circle" color="red" />
  <Text style={{ color: 'red' }}>Error: Invalid email</Text>
</View>`}</code></pre>
                </div>
                <h3>
                  {"Typography"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Mobile Typography Rules:
┌─────────────────────────────────────┐
│ 1. Use system fonts for fast loading│
│ 2. Minimum 16px for body text       │
│ 3. Line height: 1.5x font size      │
│ 4. Max 60-70 characters per line    │
│ 5. Left-align for readability       │
└─────────────────────────────────────┘

Font Families:
- iOS: San Francisco
- Android: Roboto
- Custom: Google Fonts (adds load time)

Example:
const typography = {
  h1: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    letterSpacing: -0.5
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0
  },
  caption: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#666'
  }
};`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Forms and Input Design"}
                </h2>
                <h3>
                  {"Form Best Practices"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"One Column:"}
                    </strong>
                    {" Easier to scan and complete"}
                  </li>
                  <li>
                    <strong>
                      {"Clear Labels:"}
                    </strong>
                    {" Above input, not inside (labels disappear when typing)"}
                  </li>
                  <li>
                    <strong>
                      {"Appropriate Keyboards:"}
                    </strong>
                    {" Email keyboard for email, number pad for numbers"}
                  </li>
                  <li>
                    <strong>
                      {"Inline Validation:"}
                    </strong>
                    {" Show errors immediately, not after submit"}
                  </li>
                  <li>
                    <strong>
                      {"Progress Indicators:"}
                    </strong>
                    {" Show how many steps remain"}
                  </li>
                  <li>
                    <strong>
                      {"Smart Defaults:"}
                    </strong>
                    {" Pre-fill what you can"}
                  </li>
                  <li>
                    <strong>
                      {"Clear CTAs:"}
                    </strong>
                    {" \"Create Account\" not \"Submit\""}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`// Good form design example
<View style={styles.form}>
  {/* Clear label above input */}
  <Text style={styles.label}>Email Address</Text>
  <TextInput
    style={styles.input}
    placeholder="you@example.com"
    keyboardType="email-address"      // Email keyboard
    autoCapitalize="none"             // Don't capitalize
    autoCorrect={false}               // Don't autocorrect
    textContentType="emailAddress"    // Autofill support
  />

  {/* Show error immediately */}
  {emailError && (
    <Text style={styles.error}>
      Please enter a valid email
    </Text>
  )}

  {/* Phone number with appropriate keyboard */}
  <Text style={styles.label}>Phone Number</Text>
  <TextInput
    style={styles.input}
    placeholder="(555) 123-4567"
    keyboardType="phone-pad"          // Number pad
    textContentType="telephoneNumber"
  />

  {/* Clear, descriptive button */}
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Create Account</Text>
  </TouchableOpacity>
</View>`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Loading States and Feedback"}
                </h2>
                <p>
                  {"Always show users what's happening. Like an elevator showing which floor it's on - users feel less anxious when they know the system is working."}
                </p>
                <div className="code-block">
                  <pre><code>{`Types of Loading States:
┌────────────────────────────────────┐
│ 1. Spinner: Quick actions (<2s)   │
│ 2. Skeleton: Content loading       │
│ 3. Progress bar: File uploads      │
│ 4. Pull-to-refresh: Update content │
└────────────────────────────────────┘

// Loading spinner
{loading && (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#007AFF" />
    <Text>Loading...</Text>
  </View>
)}

// Skeleton placeholder
<View style={styles.skeletonCard}>
  <View style={[styles.skeleton, { width: 100, height: 100 }]} />
  <View style={[styles.skeleton, { width: '100%', height: 20 }]} />
  <View style={[styles.skeleton, { width: '70%', height: 20 }]} />
</View>

// Success feedback
<View style={styles.successMessage}>
  <Icon name="check-circle" color="green" size={24} />
  <Text>Account created successfully!</Text>
</View>

// Error with retry option
<View style={styles.errorContainer}>
  <Icon name="alert-circle" color="red" size={48} />
  <Text>Something went wrong</Text>
  <Button title="Try Again" onPress={retry} />
</View>`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Accessibility (A11y)"}
                </h2>
                <p>
                  {"Design for everyone, including users with disabilities. Good accessibility benefits all users."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Screen Reader Support:"}
                    </strong>
                    {" Add accessibility labels to all interactive elements"}
                  </li>
                  <li>
                    <strong>
                      {"Sufficient Contrast:"}
                    </strong>
                    {" Text readable for low vision users"}
                  </li>
                  <li>
                    <strong>
                      {"Scalable Text:"}
                    </strong>
                    {" Support system font size settings"}
                  </li>
                  <li>
                    <strong>
                      {"Alternative Text:"}
                    </strong>
                    {" Describe images for blind users"}
                  </li>
                  <li>
                    <strong>
                      {"Don't Rely on Color Alone:"}
                    </strong>
                    {" Use icons + text"}
                  </li>
                  <li>
                    <strong>
                      {"Keyboard Navigation:"}
                    </strong>
                    {" Support external keyboards"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`// Accessibility example
<TouchableOpacity
  accessible={true}
  accessibilityLabel="Add to favorites"
  accessibilityHint="Double tap to add this item to your favorites"
  accessibilityRole="button"
>
  <Icon name="heart" />
</TouchableOpacity>

// Image with alt text
<Image
  source={require('./profile.jpg')}
  accessible={true}
  accessibilityLabel="Profile photo of John Smith"
/>

// Dynamic font sizes
<Text style={{
  fontSize: 16,
  ...Platform.select({
    ios: {
      // Scales with iOS accessibility settings
      fontSize: PixelRatio.getFontScale() * 16
    }
  })
}}>
  This text scales with system settings
</Text>`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices Summary"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Keep It Simple:"}
                    </strong>
                    {" Remove unnecessary elements"}
                  </li>
                  <li>
                    <strong>
                      {"Consistent Design:"}
                    </strong>
                    {" Use same patterns throughout app"}
                  </li>
                  <li>
                    <strong>
                      {"Thumb-Friendly:"}
                    </strong>
                    {" Important actions in easy reach"}
                  </li>
                  <li>
                    <strong>
                      {"Fast Loading:"}
                    </strong>
                    {" Show content within 3 seconds"}
                  </li>
                  <li>
                    <strong>
                      {"Clear Feedback:"}
                    </strong>
                    {" Confirm every user action"}
                  </li>
                  <li>
                    <strong>
                      {"Forgiveness:"}
                    </strong>
                    {" Allow undo, confirm destructive actions"}
                  </li>
                  <li>
                    <strong>
                      {"Native Patterns:"}
                    </strong>
                    {" Follow iOS/Android guidelines"}
                  </li>
                  <li>
                    <strong>
                      {"Test with Real Users:"}
                    </strong>
                    {" Watch people use your app"}
                  </li>
                  <li>
                    <strong>
                      {"Iterate:"}
                    </strong>
                    {" Design is never \"done\""}
                  </li>
                  <li>
                    <strong>
                      {"Accessibility First:"}
                    </strong>
                    {" Design for everyone from start"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Tools and Resources"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Design:"}
                    </strong>
                    {" Figma, Sketch, Adobe XD"}
                  </li>
                  <li>
                    <strong>
                      {"Prototyping:"}
                    </strong>
                    {" Figma, InVision, Principle"}
                  </li>
                  <li>
                    <strong>
                      {"Color Tools:"}
                    </strong>
                    {" Coolors, Adobe Color, Paletton"}
                  </li>
                  <li>
                    <strong>
                      {"Icons:"}
                    </strong>
                    {" Material Icons, Feather Icons, React Native Vector Icons"}
                  </li>
                  <li>
                    <strong>
                      {"Guidelines:"}
                    </strong>
                    {" Apple Human Interface Guidelines, Material Design"}
                  </li>
                  <li>
                    <strong>
                      {"Accessibility:"}
                    </strong>
                    {" WebAIM Contrast Checker, Stark plugin"}
                  </li>
                </ul>
              </section>
              <section className="cta-section">
                <h2>
                  {"Ready to Design Great Mobile Experiences?"}
                </h2>
                <p>
                  {"Master mobile UI/UX and create apps users love"}
                </p>
                <Link href="/hybrid-mobile-app" className="btn btn-primary btn-lg">
                  {"Explore Hybrid Mobile App Course"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Topics"}
                </h2>
                <div className="related-articles">
                  <Link href="/hybrid-mobile-app/articles/react-native" className="related-article-card">
                    <h3>
                      {"React Native"}
                    </h3>
                    {" "}
                    <p>
                      {"Build mobile apps with JavaScript"}
                    </p>
                  </Link>
                  <Link href="/hybrid-mobile-app/articles/flutter" className="related-article-card">
                    <h3>
                      {"Flutter"}
                    </h3>
                    {" "}
                    <p>
                      {"Google's UI toolkit for mobile apps"}
                    </p>
                  </Link>
                  <Link href="/hybrid-mobile-app/articles/app-store-deployment" className="related-article-card">
                    <h3>
                      {"App Store Deployment"}
                    </h3>
                    {" "}
                    <p>
                      {"Publishing to iOS and Android stores"}
                    </p>
                  </Link>
                  <Link href="/hybrid-mobile-app/articles/firebase" className="related-article-card">
                    <h3>
                      {"Firebase"}
                    </h3>
                    {" "}
                    <p>
                      {"Backend services for mobile apps"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>
                {"CODiiN Tech Mentors Lab"}
              </h3>
              <p>
                {"Empowering the next generation of tech professionals through hands-on learning and industry mentorship."}
              </p>
            </div>
            <div className="footer-section">
              <h4>
                {"Quick Links"}
              </h4>
              <ul>
                <li>
                  <Link href="/#programs">
                    {"Programs"}
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    {"About Us"}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    {"Contact"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-engineering">
                    {"Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
                <li>
                  <Link href="/agentic-ai">
                    {"Agentic AI"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>
                {"Legal"}
              </h4>
              <ul>
                <li>
                  <Link href="/privacy-policy">
                    {"Privacy Policy"}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service">
                    {"Terms & Conditions"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2024 CODiiN Tech Mentors Lab. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN, I'm interested in learning more about your programs"} />
    </>
  );
}
