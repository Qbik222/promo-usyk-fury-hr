"use strict";

var body = document.querySelector('body');
var textBtn = document.querySelector('.test-btn');
textBtn.addEventListener('click', function () {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    textBtn.innerHTML = 'light';
    return;
  }
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    textBtn.innerHTML = 'dark';
  }
});
var resultBtns = document.querySelectorAll('.result__btn');
resultBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    resultBtns.forEach(function (btn) {
      btn.classList.remove("_active");
    });
    btn.classList.add("_active");
  });
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJpbm5lckhUTUwiLCJyZXN1bHRCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDM0MsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFFbkRDLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDcEMsSUFBSUosSUFBSSxDQUFDSyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBQztJQUNqQ04sSUFBSSxDQUFDSyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDOUJQLElBQUksQ0FBQ0ssU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzFCTCxPQUFPLENBQUNNLFNBQVMsR0FBRyxPQUFPO0lBQzNCO0VBQ0o7RUFDQSxJQUFJVCxJQUFJLENBQUNLLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDO0lBQ2hDTixJQUFJLENBQUNLLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QlAsSUFBSSxDQUFDSyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDM0JMLE9BQU8sQ0FBQ00sU0FBUyxHQUFHLE1BQU07RUFDOUI7QUFDSixDQUFDLENBQUM7QUFNRixJQUFNQyxVQUFVLEdBQUdULFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0FBQzVERCxVQUFVLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxHQUFHLEVBQUk7RUFDdEJBLEdBQUcsQ0FBQ1QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDdENNLFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLFVBQVVDLEdBQUcsRUFBRTtNQUM5QkEsR0FBRyxDQUFDUixTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0lBRUZNLEdBQUcsQ0FBQ1IsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ2hDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQzlCRiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuY29uc3QgdGV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0LWJ0bicpXG5cbnRleHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWdodCcpKXtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgdGV4dEJ0bi5pbm5lckhUTUwgPSAnbGlnaHQnXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKSl7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XG4gICAgICAgIHRleHRCdG4uaW5uZXJIVE1MID0gJ2RhcmsnXG4gICAgfVxufSlcblxuXG5cblxuXG5jb25zdCByZXN1bHRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3VsdF9fYnRuJylcbnJlc3VsdEJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXN1bHRCdG5zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9hY3RpdmVcIik7XG4gICAgfSk7XG59KSIsIiJdfQ==
