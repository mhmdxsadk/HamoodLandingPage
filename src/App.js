import "./App.css";
import ReactGA from "react-ga4";
import React, { useState, useEffect } from "react";
import hamoodSong from "./assets/audio/hamoodhabibiaudio.mp3";
import backgroundVideo from "./assets/videos/hamoodhabibivideo.mp4";

const measurementId = "G-EKR7DJ3JP5";
ReactGA.initialize(measurementId);

function AddressComponent() {
	const address = "Fh9fnUqew3znMMSvX1sHLLV6cQyjzR4mR8WBcaiDxfQA";

	// eslint-disable-next-line
	const [copied, setCopied] = useState(false);
	const [isAudioPlaying, setIsAudioPlaying] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(address);
		setCopied(true);
		setTimeout(() => setCopied(false), 3000);
		if (!isAudioPlaying) {
			playHamoodSong();
		}
	};

	const playHamoodSong = () => {
		const audio = new Audio(hamoodSong);
		setIsAudioPlaying(true);
		audio.play();
		audio.onended = () => setIsAudioPlaying(false);
	};

	return (
		<div class="input-group mb-3">
			<span class="input-group-text" id="basic-addon1">
				Wallet Address
			</span>
			<input
				class="form-control"
				type="text"
				value={address}
				aria-label="Contact Address"
				aria-describedby="basic-addon1 button-addon2"
				id="wallet-address"
				readonly
			></input>
			<div class="input-group-append">
				<button
					class="btn btn-outline-light"
					id="button-addon2"
					type="button"
					onClick={() => {
						copyToClipboard();
					}}
				>
					<i className="bi bi-clipboard clipboard-icon"></i>
				</button>
			</div>
		</div>
	);
}

function App() {
	useEffect(() => {
		ReactGA.send("pageview");
	}, []);

	return (
		<div className="app">
			<div className="background-video-container">
				<video autoPlay loop muted playsInline className="background-video">
					<source src={backgroundVideo} type="video/mp4" />
					Your browser does not support rendering the video.
				</video>
			</div>

			<div className="content">
				<h1 className="title">$HAMOOD TOKEN</h1>
				<div className="social-icons">
					<a
						className="social-btn btn btn-dark"
						href="https://t.me/hamoodtoken"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="bi bi-telegram social-icon"></i>
						<h3>Telegram</h3>
					</a>

					<a
						className="social-btn btn btn-dark"
						href="https://www.tiktok.com/@hamoodhabibitoken"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="bi bi-tiktok social-icon"></i>

						<h3>TikTok</h3>
					</a>

					<a
						className="social-btn btn btn-dark"
						href="https://instagram.com/hamoodhabibitoken"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="bi bi-instagram social-icon"></i>
						<h3>Instagram</h3>
					</a>

					<a
						className="social-btn btn btn-dark"
						href="https://twitter.com/hamoodtokenoffl"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="bi bi-twitter social-icon"></i>
						<h3>Twitter</h3>
					</a>
				</div>
				<AddressComponent />
			</div>
		</div>
	);
}

export default App;
