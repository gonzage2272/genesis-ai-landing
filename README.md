# Genesis AI Consultants Landing Page

Premier AI Marketing solutions for Medspa & Aesthetic Clinics

## Features

- Responsive design optimized for desktop and mobile
- - Modern, luxury aesthetic with gold and dark theme
  - - Service showcase with hover animations
    - - Call-to-action buttons for booking consultations
      - - Smooth scrolling navigation
        - - SEO optimized
          - - Intersection Observer for scroll animations
           
            - ## Project Structure
           
            - ```
              genesis-ai-landing/
              ├── index.html          # Main HTML file
              ├── styles.css          # Complete styling with responsive design
              ├── script.js           # JavaScript for interactivity
              ├── README.md           # This file
              └── ai-robot.png        # AI robot image (add your image)
              ```

              ## Getting Started

              ### Local Development

              1. Clone the repository
              2. ```bash
                 git clone https://github.com/yourusername/genesis-ai-landing.git
                 cd genesis-ai-landing
                 ```

                 2. Open `index.html` in your browser or use a local server:
                 3. ```bash
                    python -m http.server 8000
                    ```

                    3. Visit `http://localhost:8000`
                   
                    4. ## Deployment Options
                   
                    5. ### Option 1: GitHub Pages
                    6. 1. Go to **Settings** > **Pages**
                       2. 2. Select `main` branch as source
                          3. 3. Your site will be live at `https://yourusername.github.io/genesis-ai-landing`
                            
                             4. ### Option 2: Shopify Integration
                             5. 1. Connect this repo to your Shopify store theme
                                2. 2. Deploy using Shopify CLI
                                  
                                   3. ### Option 3: Custom Domain
                                   4. Deploy to your custom domain (genesisconsultants.ai) through:
                                   5. - GitHub Pages with custom domain
                                      - - Netlify
                                        - - Vercel
                                          - - Traditional web hosting
                                           
                                            - ## Customization
                                           
                                            - ### Adding Your AI Robot Image
                                            - 1. Save your AI robot image as `ai-robot.png` in the root directory
                                              2. 2. The image will automatically display in the hero section
                                                 3. 3. Ensure image is optimized (max 2MB recommended)
                                                   
                                                    4. ### Updating Content
                                                    5. - Edit text directly in `index.html`
                                                       - - Modify colors in the `:root` variables in `styles.css`
                                                         - - Update business details in the footer
                                                          
                                                           - ### Color Scheme
                                                           - - Primary Gold: `#d4af37`
                                                             - - Dark Background: `#1a1a1a`
                                                               - - Dark Cards: `#2a2a2a`
                                                                 - - Text Light: `#e8e8e8`
                                                                   - - Text Secondary: `#b0b0b0`
                                                                     - - Accent Warm: `#c9a961`
                                                                      
                                                                       - ## Booking Integration
                                                                      
                                                                       - To integrate a booking system, replace the alert in `script.js` with your actual booking link:
                                                                      
                                                                       - ```javascript
                                                                         // Replace this line in script.js:
                                                                         window.location.href = 'https://your-booking-system.com';
                                                                         ```

                                                                         Popular booking platforms:
                                                                         - Calendly
                                                                         - - Acuity Scheduling
                                                                           - - Setmore
                                                                             - - Mindbody
                                                                               - - Custom Shopify integration
                                                                                
                                                                                 - ## Shopify Integration Steps
                                                                                
                                                                                 - 1. **Access Shopify Admin**
                                                                                   2.    - Go to your Shopify store admin
                                                                                         -    - Navigate to Online Store > Themes

                                                                                         2. **Connect GitHub**
                                                                                         3.    - Use Shopify CLI or GitHub Apps
                                                                                               -    - Authorize the connection
                                                                                                
                                                                                                    - 3. **Deploy Theme**
                                                                                                      4.    - Pull from this repository
                                                                                                            -    - Shopify will automatically rebuild
                                                                                                             
                                                                                                                 - 4. **Connect Custom Domain**
                                                                                                                   5.    - Settings > Domains
                                                                                                                         -    - Add `genesisconsultants.ai`
                                                                                                                              -    - Update DNS records with Shopify's nameservers
                                                                                                                               
                                                                                                                                   - ## Browser Support
                                                                                                                               
                                                                                                                                   - - Chrome (latest)
                                                                                                                                     - - Firefox (latest)
                                                                                                                                       - - Safari (latest)
                                                                                                                                         - - Edge (latest)
                                                                                                                                           - - Mobile browsers (iOS Safari, Chrome Mobile)
                                                                                                                                            
                                                                                                                                             - ## Performance Optimization
                                                                                                                                            
                                                                                                                                             - - CSS and JavaScript are minified
                                                                                                                                               - - Images are optimized
                                                                                                                                                 - - Lazy loading for animations
                                                                                                                                                   - - Smooth scroll behavior
                                                                                                                                                    
                                                                                                                                                     - ## SEO Features
                                                                                                                                                    
                                                                                                                                                     - - Meta tags for description
                                                                                                                                                       - - Semantic HTML structure
                                                                                                                                                         - - Mobile-responsive design
                                                                                                                                                           - - Fast loading times
                                                                                                                                                             - - Clear content hierarchy
                                                                                                                                                              
                                                                                                                                                               - ## Support
                                                                                                                                                              
                                                                                                                                                               - For questions or issues regarding:
                                                                                                                                                               - **Deployment**: See [GitHub Pages Documentation](https://pages.github.com/)
                                                                                                                                                               - - **Shopify Integration**: See [Shopify Theme Development](https://shopify.dev/themes)
                                                                                                                                                                 - - **Genesis AI Consultants**: Contact your account manager
                                                                                                                                                                  
                                                                                                                                                                   - ## License
                                                                                                                                                                  
                                                                                                                                                                   - This landing page is created for Genesis AI Consultants. All rights reserved.
                                                                                                                                                                  
                                                                                                                                                                   - ## Version History
                                                                                                                                                                  
                                                                                                                                                                   - - **v1.0** - Initial release with hero section, services, and CTA
                                                                                                                                                                     - - Features: Responsive design, smooth scrolling, animation effects
