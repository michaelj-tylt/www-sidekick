'use client';
import { PageLayout } from '@/shared/page-layout';
import { Footer } from '@/shared/footer';
import { Section } from '@/shared/section';
import { Hero } from '@/shared/hero-landing';
// import { DemoRequestContent } from '@/shared/demo-request';
import { FaWindows, FaApple } from 'react-icons/fa';
import { SiLinux } from 'react-icons/si';
import theme from '../theme';

export default function HomePage() {
  return (
    <PageLayout 
      homeUrl={process.env.NEXT_PUBLIC_MAIN_URL}
      auroraColors={["#5227FF", "#1E40AF", "#0F172A"]}
      pixelColors="#5227FF,#3B82F6,#1E3A8A"
      theme={theme}
      appName="Sidekick"
    >
        {/* Page 1: Hero */}
        <div 
          className="min-h-screen w-full flex items-center justify-center relative text-white snap-start"
        >
          <Section isHero={true}>
            <Hero 
              primaryText="Your intelligent browser sidekick."
              secondaryText="Tylt Sidekick automates repetitive browser tasks while you focus on important work. Real mouse clicks and keyboard use on your desktop."
              description=""
              audience="professionals"
            />
          </Section>
        </div>

        {/* Page 2: Download */}
        <div id="download" className="min-h-screen w-full flex items-center justify-center relative text-white snap-start">
          <Section>
            {/* Text section - TOP ON MOBILE, RIGHT ON DESKTOP */}
            <div className="flex flex-col lg:flex-row items-start justify-start">
              <div className="flex-1 lg:order-2 text-left mb-8 lg:mb-0">
                <div className="space-y-6 sm:space-y-8">
                  {/* Main headline with gradient */}
                  <h1 className="section-heading">
                    <span className="section-gradient-primary">
                      Download
                    </span>
                    <br />
                    <span className="section-gradient-secondary">
                      Tylt Sidekick
                    </span>
                  </h1>
                  
                  {/* Subtitle with elegant styling */}
                  <div className="relative">
                    <p className="section-subheading">
                      Get Started Today
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl mt-4">
                      Docker Desktop required.
                    </p>
                    {/* Subtle accent line */}
                    <div className={`absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
                  </div>
                </div>
              </div>

              {/* Download options section - BOTTOM ON MOBILE, LEFT ON DESKTOP */}
              <div className="flex-1 lg:order-1 lg:pr-12 w-full">
                <div className="relative">
                  {/* Subtle glow effect behind download options - hidden on mobile */}
                  <div className={`hidden sm:block absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform rotate-1`}></div>
                  <div className="relative sm:bg-gradient-to-br sm:from-zinc-900/50 sm:to-zinc-800/30 sm:rounded-2xl p-0 sm:p-6 sm:backdrop-blur-sm sm:border sm:border-zinc-700/50">
                    {/* Platform download options */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* Windows */}
                      <div id="download-windows" className="relative group">
                        <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-zinc-600/50 border-zinc-600/30 cursor-not-allowed opacity-60">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${theme.classes.gradient} rounded-lg flex items-center justify-center`}>
                              <FaWindows size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white text-zinc-400">Windows</h3>
                            </div>
                            <div className={`platform-badge bg-gradient-to-r ${theme.classes.gradient} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0`}>
                              Detected
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* macOS */}
                      <div id="download-macos" className="relative group">
                        <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-zinc-600/50 border-zinc-600/30 cursor-not-allowed opacity-60">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${theme.classes.gradient} rounded-lg flex items-center justify-center`}>
                              <FaApple size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white text-zinc-400">Mac Silicon</h3>
                            </div>
                            <div className={`platform-badge bg-gradient-to-r ${theme.classes.gradient} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0`}>
                              Detected
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Linux */}
                      <div id="download-linux" className="relative group">
                        <div className="relative bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-zinc-600/50 border-zinc-600/30 cursor-not-allowed opacity-60">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${theme.classes.gradient} rounded-lg flex items-center justify-center`}>
                              <SiLinux size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white text-zinc-400">Linux</h3>
                            </div>
                            <div className={`platform-badge bg-gradient-to-r ${theme.classes.gradient} text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0`}>
                              Detected
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Release date message */}
                    <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                      <p className="text-sm text-zinc-400 text-center">
                        <span className={`${theme.classes.primary} font-medium`}>Release Date:</span> Monday, August 18th
                        <br />
                        Binaries for Windows, Mac, and Linux will be available for download.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 3: Problems */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="relative flex flex-col lg:flex-row items-center justify-center">
            {/* Text section */}
            <div className="flex-1 lg:pr-12 text-left mb-8 lg:mb-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Main headline with gradient */}
                <h1 className="section-heading">
                  <span className="section-gradient-primary">
                    The Problem with
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    Repetitive Browser Work
                  </span>
                </h1>
                
                {/* Subtitle with elegant styling */}
                <div className="relative">
                  <p className="section-subheading">
                    You're stuck doing the same browser tasks over and over. Click, type, wait, click again. There has to be a better way.
                  </p>
                  {/* Subtle accent line */}
                  <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
                </div>
              </div>
            </div>
            
            {/* Problems section */}
            <div className="flex-1">
              <div className="relative">
                {/* Subtle glow effect behind problems */}
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform -rotate-1`}></div>
                <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                  <div className="space-y-6">
                    {/* Problem 1 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>Endless Click-Type-Wait Cycles</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">You spend hours every week doing the same browser tasks. Fill out forms, navigate websites, copy data between systems. It&apos;s mind-numbing work.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 2 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>Multitasking Overhead</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">Every time you switch between your important work and these repetitive tasks, you lose focus and momentum. The context switching kills productivity.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 3 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>Browser Fatigue</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">Your eyes get tired, your hands get tired, and your brain gets tired of doing the same repetitive motions over and over again.</p>
                    </div>
                    
                    <div className="border-t border-zinc-700/50"></div>
                    
                    {/* Problem 4 */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold ${theme.classes.accent}`}>No Time for Real Work</h3>
                      <p className="text-base text-zinc-300 leading-relaxed">The tasks that actually matter - strategy, creativity, problem-solving - get pushed aside because you&apos;re busy clicking buttons all day.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Section>
        </div>

        {/* Page 4: Solution */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Main headline with gradient */}
              <div className="text-left space-y-6">
                <h2 className="section-heading">
                  <span className="section-gradient-primary">
                    Tylt Sidekick: Your Personal
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    Browser Automation
                  </span>
                </h2>
                <p className="section-subheading  max-w-4xl">
                  Tylt Sidekick can actually SEE your browser and control it using real mouse clicks and keyboard typing - just like you would, but without you having to do it.
                </p>
              </div>
              
              {/* Feature cards grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.gradientHover} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:${theme.classes.border} transition-all duration-300 h-full flex flex-col`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${theme.classes.accent} mb-6`}>Works Like You Do</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed flex-1">Tylt Sidekick sees your screen and interacts with websites exactly like you would - clicking buttons, filling forms, and navigating pages with real mouse and keyboard actions.</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.gradientHover} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:${theme.classes.border} transition-all duration-300 h-full flex flex-col`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${theme.classes.accent} mb-6`}>Just Tell It What To Do</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed flex-1">No programming required. Just describe your task in plain English like you&apos;re talking to an assistant. &quot;Fill out this form&quot; or &quot;Check my emails&quot; - that&apos;s it.</p>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="relative group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.gradientHover} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 hover:${theme.classes.border} transition-all duration-300 h-full flex flex-col`}>
                    <h3 className={`text-2xl lg:text-3xl font-bold ${theme.classes.accent} mb-6`}>Handles the Unexpected</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed flex-1">Tylt Sidekick adapts to popups, loading screens, layout changes, and errors automatically. It&apos;s smart enough to figure things out on its own, just like you would.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 5: Code Example */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Main headline with gradient */}
              <div className="text-left space-y-6">
                <h2 className="section-heading">
                  <span className="section-gradient-primary">
                    Real Browser Automation
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    in Plain English
                  </span>
                </h2>
              </div>
              
              {/* Code comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Before Sidekick */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold ${theme.classes.accent}`}>Before Tylt Sidekick</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-base space-y-3 border border-zinc-700/50">
                    <p className="text-zinc-300">1. Open browser, navigate to website</p>
                    <p className="text-zinc-300">2. Click through multiple pages</p>
                    <p className="text-zinc-300">3. Fill out form fields one by one</p>
                    <p className="text-zinc-300">4. Wait for pages to load</p>
                    <p className="text-zinc-300">5. Copy data to spreadsheet</p>
                    <p className="text-zinc-300">6. Repeat 47 more times... 😴</p>
                  </div>
                </div>
                
                {/* After Sidekick */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold ${theme.classes.accent}`}>After Tylt Sidekick</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-base space-y-3 border border-zinc-700/50">
                    <p className="text-zinc-300">Go to the customer portal</p>
                    <p className="text-zinc-300">Fill out the weekly report form</p>
                    <p className="text-zinc-300">Download the results to my desktop</p>
                    <p className="text-zinc-300">Do this for all 48 customers</p>
                    <p className="text-zinc-300">Email me when it&apos;s done</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom text */}
              <div className="text-left">
                <p className="section-subheading  max-w-4xl">
                  Tylt Sidekick handles the rest - finding elements visually, dealing with loading states, and adapting to changes automatically.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Page 6: Pricing */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <div className="relative flex flex-col lg:flex-row items-center justify-center">
            {/* Text section */}
            <div className="flex-1 lg:pr-12 text-left mb-8 lg:mb-0">
              <div className="space-y-6 sm:space-y-8">
                {/* Main headline with gradient */}
                <h1 className="section-heading">
                  <span className="section-gradient-primary">
                    Simple, Transparent
                  </span>
                  <br />
                  <span className="section-gradient-secondary">
                    Pricing
                  </span>
                </h1>
                
                {/* Subtitle with elegant styling */}
                <div className="relative">
                  <p className="section-subheading">
                    Our pricing is easy - start free, then pay as you scale
                  </p>
                  {/* Subtle accent line */}
                  <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.classes.gradient} rounded-full opacity-60 hidden lg:block`}></div>
                </div>
              </div>
            </div>
            
            {/* Pricing section */}
            <div className="flex-1">
              <div className="space-y-6">
                {/* For Everyone */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform -rotate-1`}></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                    <div className="space-y-4">
                      <h3 className={`text-2xl font-bold ${theme.classes.accent}`}>For Everyone</h3>
                      <div className={`text-2xl font-bold ${theme.classes.primary}`}>
                        Initial month: <span className={`${theme.classes.primary}`}>$0/mo</span>
                      </div>
                      <div className="text-xl font-semibold">
                        After: <span className="text-white">$25/mo</span>
                      </div>
                      <div className="text-base text-zinc-300">
                        + Pay for model usage. Most tasks are less than a penny
                      </div>
                      <div className="mt-4">
                        <a 
                          href="#download"
                          className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-base"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enterprise */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.classes.glow} rounded-2xl blur-xl transform rotate-1`}></div>
                  <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50">
                    <div className="space-y-4">
                      <h3 className={`text-2xl font-bold ${theme.classes.accent}`}>Enterprise</h3>
                      <div className={`text-xl font-semibold ${theme.classes.primary}`}>
                        Custom Seat Pricing
                      </div>
                      <div className="text-base text-zinc-300">
                        Tailored pricing for teams and organizations
                      </div>
                      <div className="space-y-2">
                        <div className="text-base text-zinc-400">✓ Volume discounts available</div>
                        <div className="text-base text-zinc-400">✓ On-premises deployment</div>
                        <div className="text-base text-zinc-400">✓ Priority support</div>
                        <div className="text-base text-zinc-400">✓ Custom integrations</div>
                      </div>
                      <div className="text-right">
                        <a 
                          href="mailto:hello@gotylt.com?subject=Enterprise%20Pricing%20Inquiry"
                          className={`${theme.classes.primary} ${theme.classes.primaryHover} transition-colors text-sm`}
                        >
                          Contact Sales →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Section>
        </div>

        {/* Footer */}
        <div className="w-full flex items-center justify-center relative text-white snap-start lg:min-h-screen">
          <Section>
            <Footer />
          </Section>
        </div>
    </PageLayout>
  );
}