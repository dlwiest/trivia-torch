# Trivia Torch

Trivia Torch is a Next.js application that leverages OpenAI's powerful language models to generate trivia questions based on user-specified topics. Dive into a world of endless trivia and challenge your knowledge on a variety of subjects!

## Features

- **Dynamic Trivia Generation**: Generate trivia questions on any topic of your choice.
- **Customizable Difficulty**: Tailor the trivia difficulty to your preference.

## Getting Started

Follow these instructions to get a copy of Trivia Torch up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS version)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/trivia-torch.git
    cd trivia-torch
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up the environment variables**

    - Find the `.env.example` file in the root directory.
    - Add your OpenAI API key to the file:
  
      ```env
      OPENAI_API_KEY=your_openai_api_key_here
      ```
  
    - Rename `.env.example` to `.env` to ensure the application recognizes your API key.

4. **Run the development server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Usage

Once the application is running:

1. Navigate to the main page.
2. Enter a topic you're interested in generating trivia questions for.
3. Choose the difficulty
4. Hit the "Generate" button and wait for the trivia questions to appear!

## Contributing

Contributions are welcome and greatly appreciated! For major changes, please open an issue first to discuss what you would like to change.

Please ensure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- Next.js - The React framework used
- OpenAI - For providing the API used to generate trivia questions
