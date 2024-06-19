const outbar =document.querySelector(".progressbar")
           const iconRight = document.querySelector(".a1")
           const iconLeft = document.querySelector(".a12")
           const draggable = document.querySelector(".bar");
           const buttonLeft = document.querySelector('.button-left');
           const content = document.querySelector('.cards');
const buttonRight = document.querySelector('.button-right');
           let isDragging = false;
           let startX, offsetX;
           
           draggable.addEventListener('mousedown', (e) => {
               isDragging = true;
               startX = e.clientX;
               offsetX = draggable.offsetLeft;
               draggable.style.cursor = 'grabbing';
           });
           
           
           document.addEventListener('mousemove', (e) => {
               if (!isDragging) return;
           
               const dx = e.clientX - startX;
               let newLeft = offsetX + dx;
               const container = draggable.parentElement;
               const containerWidth = container.clientWidth;
               const draggableWidth = draggable.clientWidth;
               newLeft = Math.max(0, Math.min(newLeft, containerWidth - draggableWidth));
               
               draggable.style.left = newLeft + 'px';
               const maxRight = containerWidth - draggableWidth;
               if (newLeft === 0) {
                iconLeft.style.fill = 'white';
                iconRight.style.fill = 'rgb(108, 142, 45)';
            } else if (newLeft === maxRight) {
                iconLeft.style.fill = 'rgb(108, 142, 45)';
                iconRight.style.fill = 'white';
            } else {
                iconLeft.style.fill = 'white';
                iconRight.style.fill = 'white';
            }
           });
           
           
           document.addEventListener('mouseup', () => {
               if (isDragging) {
                   isDragging = false;
                   draggable.style.cursor = 'pointer';
               }
           })
           buttonLeft.addEventListener('click', () => {
            draggable.style.left = '0';
            iconLeft.style.fill = 'white';
            iconRight.style.fill = 'rgb(108, 142, 45)';
            content.style.marginLeft = "7%"
           
          
        });
        
        buttonRight.addEventListener('click', () => {
            const containerWidth = draggable.parentElement.clientWidth;
            const draggableWidth = draggable.clientWidth;
            const maxRight = containerWidth - draggableWidth;
            draggable.style.left = maxRight + 'px';
            iconRight.style.fill = 'white';
            iconLeft.style.fill = 'rgb(108, 142, 45)';
            content.style.marginLeft = "1%"

           
        });
        draggable.addEventListener('mousedown', (e) => {
          isDragging = true;
          startX = e.clientX - draggable.offsetLeft;
          
      });

      document.addEventListener('mousemove', (e) => {
          if (isDragging) {
              let moveX = e.clientX - startX;
              moveX = Math.max(0, Math.min(moveX, outbar.offsetWidth - draggable.offsetWidth));
              draggable.style.left = `${moveX}px`;

              // Calculate the margin-left percentage based on the draggable's position
              let maxMove = outbar.offsetWidth - draggable.offsetWidth;
              let marginPercent = 7 -(6 *(moveX / maxMove)) 
              content.style.marginLeft = `${marginPercent}%`;
          }
      });

      document.addEventListener('mouseup', () => {
          if (isDragging) {
              isDragging = false;
              
             
          }
      });