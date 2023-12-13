document.querySelectorAll(".scroll_script").forEach(list => {
    list.addEventListener("wheel", e => {
      const atLeftEnd = (list.scrollLeft === 0);
      
      const atRightEnd = (list.scrollLeft + list.offsetWidth >= list.scrollWidth);
  
      // 휠 이벤트가 위로 가는 것인지 아래로 가는 것인지 확인
      const scrollingUp = (e.deltaY < 0);
      const scrollingDown = (e.deltaY > 0);
  
      if ((atLeftEnd && scrollingUp) || (atRightEnd && scrollingDown)) {
        // 스크롤이 양 끝에 있고 사용자가 해당 방향으로 계속 스크롤하려고 하면,
        // 이벤트의 기본 동작을 수행하여 수직 스크롤을 허용합니다.
        return;
      }
  
      // 그렇지 않으면, 가로 스크롤을 진행합니다.
      e.preventDefault();
      // noinspection JSSuspiciousNameCombination
      list.scrollLeft += e.deltaY * 2;
    })
  });

console.log('test');
