(async () => {
    const say = await import('say');
    const { speak, stop } = say.default;

    speak('Hello', 'Alex', 1.0, (err) => {
        if (err) {
            return console.error(err);
        }

        // Adding a delay before stopping
        setTimeout(() => {
            stop();

            // Adding a delay before starting the next speech
            setTimeout(() => {
                speak("Hello?", 'Alex', 0.5);
            }, 500);  // Delay in milliseconds
        }, 1000);  // Delay in milliseconds
    });
})();
