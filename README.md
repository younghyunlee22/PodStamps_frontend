# PodStamps

PodStamps is a web application for saving and playing favorite moments in podcast episodes.

## Features

- Save podcast episodes along with specific timestamps and tags.
- Play from the saved moments within the application.
- Easily manage and organize saved moments.

## Technologies Used

- **Frontend:** React.js, Axios
- **Backend:** Node.js, Express.js, MongoDB
- **Styling:** CSS, Bootstrap

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository:**
```
git clone <repository-url>
```

2. **Install dependencies:**

```
cd frontend
npm install
```
```
cd backend
npm install
```

3. **Start the server:**
```
npm start
or
npm run dev

```

4. **Open the application in your browser:**
```
http://localhost:5173
```

## Usage

1. **Save Moments:**
- Click on the share icon on a podcast episode from your Spotify app when you hear the moment you want to save.
- Toggle 'Share from xx:xx' and click on Copy link.
- Paste the link on 'Quick Save' page with any relevant tags and description. Then submit the form to save the moment.

2. **View Players with Saved Moments:**
- Access your saved moments from the MyPodStamps page. Spotify Player for each saved episode will display and will be ready to play from the saved moment.

3. **Play Moments:**
- Click on the play button and start listening from the saved moment.

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please submit an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
