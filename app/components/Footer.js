import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black pt-12 md:pt-20 px-4 lg:px-6 xl:px-10'>
      <div className='w-full max-w-[1600px] mx-auto'>
        <div className='flex items-start justify-between flex-col md:flex-row gap-8 md:gap-10'>
          <div>
            <p className='text-white text-[14px] sm:text-[20px] lg:text-[25px] sm:leading-[36px] font-normal w-full max-w-[849px]'>Imagine having the freedom to explore weightlifting and exercise programs led by top trainers from around the world, all from the comfort of your own space.</p>
            <div className='flex items-center gap-3 mt-5 sm:mt-[37px]'>
              <Link href='https://www.facebook.com/Sunlifter.Club'><Image src='/icons/facebook.svg' alt='facebook' width={52} height={52} className='sm:w-[52px] sm:h-[53px] w-[40px] h-[40px]' /></Link>
              <Link href='https://x.com/SunLifter_Club'><Image src='/icons/twitter.svg' alt='twitter' width={52} height={52} className='sm:w-[52px] sm:h-[53px] w-[40px] h-[40px]' /></Link>
              <Link href='http://www.instagram.com/sunlifter.club'><Image src='/icons/instagram.svg' alt='instagram' width={52} height={52} className='sm:w-[52px] sm:h-[53px] w-[40px] h-[40px]'/></Link>
            </div>
          </div>
          <div className='sm:w-fit w-full flex items-start gap-5 sm:gap-10 lg:gap-[65px] lg:flex-nowrap flex-wrap text-nowrap'>
            <div>
              <h2 className='text-white text-[16px] sm:text-[18px] leading-[22.5px] font-normal mb-3 sm:mb-[22px]'>Quick Links</h2>
              <div className='flex items-start flex-col gap-2.5 sm:gap-3'>
                <Link href='/' className='text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal'>Home</Link>
                <Link href='/available-routines' className='text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal'>Available Rountines</Link>
                <Link href='/profile' className='text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal'>Dashboard</Link>
              </div>
            </div>
            <div className='pr-8 sm:border-t-0 border-t border-[#292424] sm:w-fit w-full pt-[24px] sm:pt-0'>
              <h2 className='text-white text-[16px] sm:text-[18px] leading-[22.5px] font-normal mb-3 sm:mb-[22px]'>Contact</h2>
              <div className='flex items-center gap-2.5 sm:gap-3.5'>
                <Image src='/icons/email.svg' alt='email' width={24} height={24} className='sm:w-[24px] sm:h-[24px] w-[18px] h-[18px]' />
                <h3 className='text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal tracking-[-0.02em]'>SunlifterApp@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 sm:mt-10 md:mt-20 mb-8 md:mb-10 flex md:items-center justify-between md:flex-row flex-col-reverse gap-6'>
          <p className='text-white/60 text-[16px] leading-[20px] font-normal'>Copyright © 2024 All rights reserved</p>
          <ul className='flex items-center gap-5 sm:gap-[35px] py-6 md:py-0 md:border-y-0 border-y border-[#292424]'>
            <li>
  <a
    href="/privacy-policy"
    onClick={(e) => {
      e.preventDefault(); // Prevent default link behavior
      window.open(
        '/privacy-policy',
        'PrivacyPolicy',
        'width=600,height=400,scrollbars=yes,resizable=yes'
      );
    }}
    className="text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal"
  >
    Privacy Policy

Effective Date: 05 Jan 2025

Introduction Sunlifter.Club ("we," "our," "us") values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website Sunlifter.Club ("the Site"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.

Information We Collect
We may collect information about you in various ways, including:

Personal Data

Information such as your name, email address, phone number, and any other details you provide when you register on the Site, subscribe to our newsletter, or contact us.

Non-Personal Data

Information automatically collected, such as your IP address, browser type, operating system, access times, and pages viewed directly before and after accessing the Site.

Cookies and Tracking Technologies

We use cookies and similar tracking technologies to enhance your experience on our Site. You can control cookie preferences through your browser settings.

How We Use Your Information
We may use the information we collect to:

Provide, operate, and maintain the Site.

Improve your experience on the Site.

Respond to your comments, questions, and requests.

Send administrative information, such as updates to our terms, conditions, and policies.

Monitor and analyze usage and trends to improve the Site.

Comply with legal obligations.

How We Share Your Information
We do not sell your personal information to third parties. We may share your information with third parties in the following situations:

Service Providers: With third-party vendors, service providers, or contractors who perform services on our behalf.

Legal Requirements: To comply with applicable laws, regulations, or legal processes, or to protect our rights.

Business Transfers: In connection with or during negotiations of any merger, sale of company assets, financing, or acquisition.

Data Security
We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.

Third-Party Websites
The Site may contain links to third-party websites. We are not responsible for the privacy practices of such websites. We encourage you to read the privacy policies of every website you visit.

Your Privacy Rights
Depending on your location, you may have certain rights regarding your personal data, including:

Accessing your data.

Requesting corrections to your data.

Requesting deletion of your data.

Opting out of certain data processing.

To exercise your rights, please contact us at sunlifterapp@gmail.com.

Children's Privacy
The Site is not intended for individuals under the age of 13 (or the relevant age of majority in your jurisdiction). We do not knowingly collect personal information from children.

Updates to This Privacy Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this Privacy Policy periodically.

Contact Us
If you have questions or concerns about this Privacy Policy, please contact us.
  </a>
</li>
            <li>
  <a
    href="/cookie-policy"
    onClick={(e) => {
      e.preventDefault(); // Prevent default link behavior
      window.open(
        '/cookie-policy',
        'CookiePolicy',
        'width=600,height=400,scrollbars=yes,resizable=yes'
      );
    }}
    className="text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal"
  >
    Cookie Policy

Effective Date: 5 Jan 2025

Introduction Sunlifter.Club ("we," "our," "us") uses cookies and similar technologies on our website Sunlifter.Club ("the Site"). This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.

What Are Cookies?
Cookies are small text files placed on your device (computer, smartphone, or other electronic device) by websites you visit. They help websites function effectively and provide valuable information to site owners. Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remain on your device for a set period or until manually deleted).

Types of Cookies We Use
We use the following types of cookies on the Site:

Essential Cookies

These cookies are necessary for the Site to function and cannot be turned off. They are typically set in response to actions you take, such as setting your privacy preferences or logging in.

Performance and Analytics Cookies

These cookies help us understand how visitors interact with the Site by collecting and reporting information anonymously. This allows us to improve the performance and functionality of the Site.

Functional Cookies

These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.

Advertising and Targeting Cookies

These cookies track your browsing habits to deliver advertisements that are relevant to you. They may also limit how often you see an advertisement and help measure the effectiveness of ad campaigns.

Third-Party Cookies

Some cookies are placed by third-party services on the Site, such as analytics providers or social media platforms.

How We Use Cookies
We use cookies to:

Provide, operate, and maintain the Site.

Enhance your browsing experience.

Analyze usage patterns and improve the Site.

Deliver tailored advertisements and measure their effectiveness.

Your Cookie Choices
You have the following options regarding cookies:

Browser Settings

Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies or delete cookies that have already been set. Note that disabling certain cookies may affect the functionality of the Site.

Cookie Banner

When you first visit the Site, you will see a cookie banner. You can manage your preferences and consent to the use of cookies through this banner.

Opt-Out Mechanisms

For certain cookies used for analytics and advertising, you can opt out through tools provided by organizations such as the Network Advertising Initiative (NAI) or the Digital Advertising Alliance (DAA).

Third-Party Cookies
We are not responsible for the use of cookies by third parties. We recommend reviewing the cookie policies of any third-party services you use.

Updates to This Cookie Policy
We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this Cookie Policy periodically.

Contact Us If you have questions or concerns about this Cookie Policy, please contact us.


  </a>
</li>
<li>
  <a
    href="/Terms of Use"
    onClick={(e) => {
      e.preventDefault(); // Prevent default link behavior
      window.open(
        '/Terms of Use',
        'Terms of Use',
        'width=600,height=400,scrollbars=yes,resizable=yes'
      );
    }}
    className="text-white/60 text-[14px] sm:text-[16px] sm:leading-[20px] font-normal"
  >
    Terms of Use

Effective Date: 5 Jan 2025

Introduction Welcome to Sunlifter.Club ("the Site"), operated by Sunlifter.Club ("we," "our," "us"). By accessing or using the Site, you agree to comply with and be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Site.

1. Use of the Site

- You may use the Site for lawful purposes only.
- You agree not to use the Site in any way that violates any applicable law or regulation.
- You agree not to engage in any conduct that could harm, disable, overburden, or impair the Site or interfere with any other party’s use of the Site.

2. Intellectual Property

- All content, features, and functionality on the Site, including text, graphics, logos, images, and software, are the exclusive property of Sunlifter.Club and are protected by intellectual property laws.
- You may not reproduce, distribute, modify, or create derivative works of any material on the Site without our prior written consent.

3. User Accounts

- To access certain features of the Site, you may be required to create an account.
- You agree to provide accurate and complete information when creating an account and to keep your login credentials confidential.
- You are responsible for all activity that occurs under your account. Notify us immediately of any unauthorized use of your account.

4. Prohibited Activities

- You agree not to:
  - Use the Site for fraudulent or deceptive purposes.
  - Introduce viruses, malware, or other harmful material to the Site.
  - Attempt to gain unauthorized access to any part of the Site.
  - Collect or harvest personal information from other users without their consent.

5. Third-Party Links

- The Site may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or assume responsibility for any third-party content, products, or services.

6. Disclaimer of Warranties

- The Site is provided "as is" and "as available" without any warranties, express or implied. We do not guarantee that the Site will be error-free or uninterrupted.
- We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.

7. Limitation of Liability

- To the fullest extent permitted by law, we will not be liable for any damages arising out of or related to your use of the Site, including direct, indirect, incidental, punitive, or consequential damages.

8. Indemnification

- You agree to indemnify and hold harmless Sunlifter.Club, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising out of your use of the Site or violation of these Terms.

9. Termination

- We reserve the right to suspend or terminate your access to the Site at any time for any reason, including violation of these Terms.

10. Governing Law

- These Terms are governed by and construed in accordance with the laws of Victoria, Australia, without regard to its conflict of law principles.

11. Changes to These Terms

- We may update these Terms from time to time. Any changes will be effective immediately upon posting to the Site. Your continued use of the Site constitutes your acceptance of the revised Terms.

12. Contact Us

- If you have questions or concerns about these Terms, please contact us.


  </a>
</li>

          </ul>
        </div>
        <Image src='/assets/footer-logo.svg' alt='footer-logo' width={1600} height={454} />
      </div>
    </div>
  )
}

export default Footer