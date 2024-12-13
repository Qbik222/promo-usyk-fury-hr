(function () {
    const PROMO_END_DATE = new Date('2024-05-18T22:30:00.000Z');
    const apiURL = 'https://fav-prom.com/api_guessfight_hr';

    const
        resultsTable = document.querySelector('.tableResults__body'),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        youAreInBtns = document.querySelectorAll('.took-part'),
        predictionBtn = document.querySelector('.predictBtn'),
        itemsTeams = document.querySelectorAll('.forecast__list button');

    const hrLeng = document.querySelector('#hrLeng');

    let locale = sessionStorage.getItem('locale') || 'en';

    function setState(newLocale) {
        locale = newLocale;
        sessionStorage.setItem('locale', locale);
    }
    function toggleState() {
        const newLocale = locale === 'en' ? 'hr' : 'en';
        setState(newLocale);
        window.location.reload()
    }
    document.querySelector('.en-btn').addEventListener('click', () => {
        toggleState();

    });

    if (hrLeng) locale = 'hr';

    document.querySelector(".fav__page").classList.add(locale)

    let i18nData = {};
    let userId = Number(sessionStorage.getItem('id')) || null;
    console.log(userId)
    // userId = 10101010;

    document.querySelector(".betTrue").addEventListener("click", () =>{
        sessionStorage.setItem('id', 1481239)
        window.location.reload()
    })
    document.querySelector(".betFalse").addEventListener("click", () =>{
        sessionStorage.setItem('id', 1481187)
        window.location.reload()
    })
    document.querySelector(".unAuth").addEventListener("click", () =>{
        sessionStorage.removeItem('id')
        window.location.reload()
    })
    document.querySelector(".menu-btn").addEventListener("click", () =>{
        document.querySelector(".menu-btns").classList.toggle("hide")
    })

    const scorePrediction = {team : 1};
    const teamNamesById = [];

    function loadTranslations() {
        return fetch(`${apiURL}/translates/${locale}`).then(res => res.json())
            .then(json => {
                i18nData = json;
                translate();

                var mutationObserver = new MutationObserver(function (mutations) {
                    translate();
                });
                mutationObserver.observe(document.getElementById('predictor'), {
                    childList: true,
                    subtree: true,
                });

            });
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            elems.forEach(elem => {
                const key = elem.getAttribute('data-translate');
                elem.innerHTML = translateKey(key);
                elem.removeAttribute('data-translate');
            })
        }

        if (locale === 'en') {
            mainPage.classList.add('en');
        }

        refreshLocalizedClass();
    }

    function translateKey(key) {
        if (!key) {
            return;
        }
        return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
    }

    function refreshLocalizedClass(element, baseCssClass) {
        if (!element) {
            return;
        }
        for (const lang of ['hr']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        }).then(res => res.json())
    }

    function getUsers() {
        return request('/users');
    }

    const InitPage = () => {
        getUsers().then(users => {
            renderUsers(users);
            translate();
        })
    }

    function init() {
        initDrop();
        initPredictionBtn();

        if (window.store) {
            var state = window.store.getState();
            userId = state.auth.isAuthorized && state.auth.id || '';
            InitPage();
        } else {
            InitPage();
            let c = 0;
            var i = setInterval(function () {
                if (c < 50) {
                    if (!!window.g_user_id) {
                        userId = window.g_user_id;
                        InitPage();
                        checkUserAuth();
                        clearInterval(i);
                    }
                } else {
                    clearInterval(i);
                }
            }, 200);
        }

        checkUserAuth();
    }

    function renderUsers(users) {
        populateUsersTable(users, userId, resultsTable);
    }

    function populateUsersTable(users, currentUserId, table) {
        table.innerHTML = '';
        console.log(users)
        if (users && users.length) {
            const currentUser = userId && users.find(user => user.userid === currentUserId);
            if (currentUser) {
                displayUser(currentUser, true, table);
            }

            users.forEach((user) => {
                if (user.userid !== currentUserId) {
                    displayUser(user, false, table);
                }
            });
        }
    }

    function displayUser(user, isCurrentUser, table) {
        const additionalUserRow = document.createElement('div');
        additionalUserRow.classList.add('tableResults__row');

        const selectedTeam = user.team && user.team > 0 ? teamNamesById[user.team] : '';
        if (isCurrentUser) {
            updateLastPrediction(selectedTeam);
            refreshDrop(user.team);
            additionalUserRow.classList.add('_yourPlace');
        }

        additionalUserRow.innerHTML = `
                        <div class="tableResults__body-col">${isCurrentUser ? user.userid : maskUserId(user.userid)}</div>
                        <div class="tableResults__body-col">${formatDateString(user.lastForecast)}</div>
                        <div class="tableResults__body-col">${selectedTeam}</div>
                        <div class="tableResults__body-col">************</div>
                    `;
        table.append(additionalUserRow);
    }

    function updateLastPrediction(team) {
        const forecastLogDiv = document.querySelector('.forecast__des');
        if (team) {
            forecastLogDiv.classList.remove('hide');
            const lastPredictionLabel = document.getElementById('roundWinner');
            lastPredictionLabel.innerHTML = `${team}`;
        } else {
            forecastLogDiv.classList.add('hide');
        }
    }

    function refreshDrop(predictedTeam) {
        const regex = /“([^“”]+)”/;
        scorePrediction.team = predictedTeam;

        itemsTeams.forEach(item => {
            item.classList.remove('active');
            const teamId = +item.dataset.teamId;
            if (predictedTeam === teamId) {
                item.classList.add('active');
            }
        });
    }

    function formatDateString(dateString) {
        const date = new Date(dateString);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}.${month}.${year} / ${hours}:${minutes}`;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    // let checkUserAuth = () => {
    //     if (userId) {
    //         unauthMsgs.forEach(item => item.classList.add('hide'));
    //         youAreInBtns.forEach(item => item.classList.remove('hide'));
    //     }
    // }

    function checkUserAuth() {
        return request(`/favuser/${userId}?nocache=1`)
            .then(res => {

                if (res.userid) {
                    console.log(userId === res.userid)
                    if(res.userid == userId){
                        confirmBet(res.betConfirmed)
                    }

                    unauthMsgs.forEach(item => item.classList.add('hide'));
                    youAreInBtns.forEach(item => item.classList.remove('hide'));
                } else {
                    unauthMsgs.forEach(item => item.classList.remove('hide'));
                    youAreInBtns.forEach(item => item.classList.add('hide'));
                }
            })
    }


    //custom drop
    function initDrop() {
        const regex = /“([^“”]+)”/;

        itemsTeams.forEach(item => {
            const teamId = +item.dataset.teamId;
            teamNamesById[teamId] = item.innerHTML;

            item.addEventListener('click', () => {
                itemsTeams.forEach(el => {
                    el.classList.remove('active')
                })
                scorePrediction.team = teamId;
                item.classList.add('active')
            })
        });
    }

    let isRequestInProgress;
    function initPredictionBtn() {
        document.addEventListener('click', (e) => {
            if (!!e.target.closest('.predictBtn')) {
                if (isRequestInProgress) {
                    return
                }
                setTimeout(function() {
                    youAreInBtns.forEach(item => item.classList.remove('showBtn'));
                }, 5000);
                youAreInBtns.forEach(item => item.classList.add('showBtn'));
                isRequestInProgress = true;
                predictionBtn.classList.add("pointer-none");
                request('/bet', {
                    method: 'POST',
                    body: JSON.stringify({
                        userid: userId,
                        team: scorePrediction.team
                    })
                }).then(res => {
                    isRequestInProgress = false;
                    predictionBtn.classList.remove("pointer-none");
                    InitPage();
                }).catch(e => {
                    isRequestInProgress = false;
                    predictionBtn.classList.remove("pointer-none");
                });
            }
        });
    }

    loadTranslations()
        .then(init);

    function confirmBet(bet){
        const betWrap = document.querySelector(".forecast__question")
        const betTrue = document.querySelector(".forecast__question-item-green")
        const betFalse = document.querySelector(".forecast__question-item-orange")
        betWrap.classList.remove("hide")
        betTrue.classList.remove("active")
        betFalse.classList.remove("active")
        // console.log(betWrap)

        if(bet){
            betTrue.classList.add("active")
        }else{
            betFalse.classList.add("active")
        }
    }


    let mainPage = document.querySelector('.fav__page');
    setTimeout(() => mainPage.classList.add('overflow'), 1000);

    const currentDate = new Date();
    if(currentDate >= PROMO_END_DATE) {
        predictionBtn.classList.add('blockBtn');
    }

    const blackBtn = document.querySelector(".black-btn")

    blackBtn.addEventListener("click", () =>{
        document.body.classList.toggle("dark")
    })

})();
