import Footer from '@/components/global/Footer/Footer';

const Privacy = () => (
    <div className="flex min-h-screen flex-col items-center pt-8">
        <main className="w-full max-w-4xl grow px-2 sm:px-0">
            <h1 className="text-2xl pb-2">Privacy Policy for TriviaTorch</h1>

            <p className="pb-4">Effective Date: March 20, 2024</p>

            <p className="text-sm pb-4">Welcome to TriviaTorch, an AI-powered micro-app that generates trivia questions based on your chosen topic and difficulty level. TriviaTorch is committed to protecting your privacy. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your information.</p>

            <h2 className="text-xl pb-2">Information Collection and Use</h2>
            <p className="text-sm pb-4">TriviaTorch requires users to provide their own OpenAI API key to generate trivia questions. The API key you provide is used solely for the purpose of generating trivia questions within the app and is not stored, shared, or used for any other purposes.</p>

            <h2 className="text-xl pb-2">Data Storage and Security</h2>
            <p className="text-sm pb-4">TriviaTorch does not store any personal information or OpenAI API keys on its servers. All interactions with OpenAI's API using your key are performed client-side, and your key is not retained after the session ends.</p>

            <h2 className="text-xl pb-2">User Data</h2>
            <p className="text-sm pb-4">TriviaTorch does not collect, store, or share any personal data of its users. Users are responsible for the security and management of their own OpenAI API keys.</p>

            <h2 className="text-xl pb-2">Changes to This Privacy Policy</h2>
            <p className="text-sm pb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

            <h2 className="text-xl pb-2">Contact Us</h2>
            <p className="text-sm pb-4">If you have any questions about this Privacy Policy, please <a href="mailto:me@dlwiest.com" className="hover:font-medium">contact us</a>.</p>
        </main>

        <Footer />
    </div>
);

export default Privacy;