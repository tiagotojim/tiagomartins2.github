const track = document.querySelector('.carousel-track');
        const items = document.querySelectorAll('.carousel-item');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const totalItems = items.length;
        let currentIndex = 0;
        let intervalId;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;
            
            document.querySelectorAll('video').forEach(video => video.pause());
            
            const currentItem = items[currentIndex];
            const video = currentItem.querySelector('video');
            if (video) video.play();
        }

        function moveToNext() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        function moveToPrev() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        }

        nextButton.addEventListener('click', () => {
            clearInterval(intervalId);
            moveToNext();
            // startAutoPlay();
        });

        prevButton.addEventListener('click', () => {
            clearInterval(intervalId);
            moveToPrev();
            // startAutoPlay();
        });

        // function startAutoPlay() {
        //     intervalId = setInterval(moveToNext, 5000);
        // }

        updateCarousel();
        // startAutoPlay();

        const container = document.querySelector('.carousel-container');
        container.addEventListener('mouseenter', () => clearInterval(intervalId));
        container.addEventListener('mouseleave');