        let dev = 0;

        // current player variable
        let playerId = "";
        let playerName = "";
        let playerRank = 0;
        let playerAccessCode = "";
        let playerCount = "";
        let levelOneScore = 0;
        let levelTwoScore = 0;
        let levelThreeScore = 0;

        // bagian sidebar
        let sideState = 0;
        const sideBar = document.getElementsByClassName("sideBar")[0];
        const sideBarBlackPart = document.getElementsByClassName("sideBarBlackPart")[0];

        // bagian accountSideBar
        let accounSideState = 1;
        const accountSide = document.getElementsByClassName("accountSideBar")[0];
        const accountSideBarBtn = document.getElementsByClassName("accountSideBarBtn");
        const accountSideBarInfo1 = document.getElementsByClassName("accountSideBarInfo1");
        const accountSideBarInfo2 = document.getElementsByClassName("accountSideBarInfo2");

        // bagian button di right subcon
        const btnMain = document.getElementsByClassName("btn-main");


        const loadingContainer = document.getElementsByClassName("loadingContainer")[0];

        // algoritma mendapatkan rank player untuk list rank
        const prevpPlayerRank = [];
        const curPlayerRank = [];
        let listPoss = 1;
        const levelSelector = document.getElementById("levelSelector");

        const rankTable = document.getElementById("rank-table");

        // fungsi mendapatkan peringkat pemain
        setInterval(getSelfRank, 1000);
        function getSelfRank() {
            if (loginState == true) {
                const ajaxSelfRank = new XMLHttpRequest;
                ajaxSelfRank.onload = function () {
                    json = JSON.parse(this.responseText);
                    playerRank = json[0].rank;
                    // console.log(json);
                    document.getElementById("currentRankText").innerHTML = "rank : " + playerRank + " Pemain : " + playerCount;
                    document.getElementById("currentRankTextMobile").innerHTML = "rank : " + playerRank + " Pemain : " + playerCount;
                };
                ajaxSelfRank.open("GET", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php?req=playerRank&level=" + levelSelector.value + "&rank=" + playerId);
                ajaxSelfRank.send();
            }
            // console.log(playerAccessCode)
        }

        // fungsi untuk mendapatkan jumlah keseluruhan player per level untuk menjadi acuan rank ke berapa dari n player
        setInterval(getPlayerCount, 1000);
        function getPlayerCount() {
            const ajaxPlayerCount = new XMLHttpRequest();
            ajaxPlayerCount.onload = function () {
                jsonCount = JSON.parse(this.responseText);
                playerCount = jsonCount[0].amount;
                // console.log(jsonCount);
            };
            ajaxPlayerCount.open("GET", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php?req=playerCount&level=" + levelSelector.value);
            ajaxPlayerCount.send();
        }

        // fungsi untuk mengupdate list rank secara live berdasarkan database
        setInterval(getPlayerRank, 1000);
        function getPlayerRank() {
            const ajax = new XMLHttpRequest();
            ajax.onload = function () {
                const json = JSON.parse(this.responseText);
                // console.log(json);
                // console.log(levelSelector.value);
                const rankList = document.getElementsByClassName("rankList");
                for (let i = 0; i < Object.keys(json).length; i++) {
                    document.getElementById("rankRank" + (i + 1)).innerHTML = json[i].rank;
                    document.getElementById("rankPlayer" + (i + 1)).innerHTML = json[i].playerName;
                    // mobile part update
                    document.getElementById("mobileRankRank" + (i + 1)).innerHTML = json[i].rank;
                    document.getElementById("mobileRankPlayer" + (i + 1)).innerHTML = json[i].playerName;
                    if (levelSelector.value == 1) {
                        document.getElementById("rankScore" + (i + 1)).innerHTML = json[i].levelOneScore;
                        // mobile part update
                        document.getElementById("mobileRankScore" + (i + 1)).innerHTML = json[i].levelOneScore;
                    }
                    else if (levelSelector.value == 2) {
                        document.getElementById("rankScore" + (i + 1)).innerHTML = json[i].levelTwoScore;
                        // mobile part update
                        document.getElementById("mobileRankScore" + (i + 1)).innerHTML = json[i].levelTwoScore;
                    }
                    else if (levelSelector.value == 3) {
                        document.getElementById("rankScore" + (i + 1)).innerHTML = json[i].levelThreeScore;
                        // mobile part update
                        document.getElementById("mobileRankScore" + (i + 1)).innerHTML = json[i].levelThreeScore;
                    }
                }
            }
            ajax.open("GET", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php?req=playerRank&level=" + levelSelector.value + "&rank=all50");
            ajax.send();

            // menentukan apakah bisa buat pertanyaan atau tidak
            if (localStorage.getItem("level") == 1) {
                if ((playerRank <= 10) && levelOneScore != 0) {
                    sessionStorage.setItem("createPermis", "true");
                }
                else {
                    sessionStorage.setItem("createPermis", "false");
                }
            }
            else if (localStorage.getItem("level") == 2) {
                if (playerRank <= 10 && levelTwoScore != 0) {
                    sessionStorage.setItem("createPermis", "true");
                }
                else {
                    sessionStorage.setItem("createPermis", "false");
                }
            }
            else if (localStorage.getItem("level") == 3) {
                if (playerRank <= 10 && levelThreeScore != 0) {
                    sessionStorage.setItem("createPermis", "true");
                }
                else {
                    sessionStorage.setItem("createPermis", "false");
                }
            }
            console.log(sessionStorage.getItem("createPermis"));
        }

        // fungsi untuk cek state sideBar
        function checkSideMenu() {
            if (sideState == 0) {
                sideBar.style.transform = "translateX(0px)";
                sideBarBlackPart.style.display = "flex";
                sideState = 1;
            }
            else if (sideState == 1) {
                sideBar.style.transform = "translateX(-100vh)";
                sideBarBlackPart.style.display = "none";
                sideState = 0;
            }
        }

        // fungsi untuk cek state sideBar akun
        function checkAccoundSideMenu() {
            if (accounSideState == 0) {
                accountSide.style.display = "flex";
                accounSideState = 1;
            }
            else if (accounSideState == 1) {
                accountSide.style.display = "none";
                accounSideState = 0;
            }
        }

        // fungsi2 animasi
        function btnMainAnimTrue(index) {
            btnMain[index].classList.add("btn-main-anim");
        }
        function btnMainAnimFalse(index) {
            btnMain[index].classList.remove("btn-main-anim");
        }
        function btnMainLocationGo(url) {
            console.log("btn triggered");
            setTimeout(function () { location.href = url }, 2000);
        }

        function accountSideBarBtnAnimTrue(index) {
            accountSideBarBtn[index].classList.add("btn-main-anim");
        }
        function accountSideBarBtnAnimFalse(index) {
            accountSideBarBtn[index].classList.remove("btn-main-anim");
        }

        // fungsi untuk membuka modal login dan signup
        function openModalAccount(state) {
            if (state == 1) {
                document.getElementsByClassName("modalAccount")[0].style.display = "flex";
                // checkAccoundSideMenu();
            }
            else if (state == 0) {
                document.getElementsByClassName("modalAccount")[0].style.display = "none";
            }
        }

        function openModalAccount2(state) {
            if (state == 1) {
                document.getElementsByClassName("modalAccount2")[0].style.display = "flex";
                // checkAccoundSideMenu();
            }
            else if (state == 0) {
                document.getElementsByClassName("modalAccount2")[0].style.display = "none";
            }
        }

        // fungsi menampilkan spinner loading
        function showSpinner() {
            loadingContainer.style.display = "flex";
        }

        // login state function
        let loginState = false;
        function checkLoginState() {
            if (loginState == false) {
                checkPlayer("initialized");
            }
            else if (loginState == true) {
                showSpinner();
                setTimeout(function () { location.href = "game.html"; }, 2000);
            }
        }

        // fungsi untuk mengecek identitasi player berdasarkan database
        function checkPlayer(state) {
            // localStorage.setItem("playerId", "devWilliam")            

            playerId = localStorage.getItem("playerId");
            playerName = localStorage.getItem("playerName");
            playerAccessCode = localStorage.getItem("playerAccessCode");
            levelOneScore = localStorage.getItem("levelOneScore");
            levelTwoScore = localStorage.getItem("levelTwoScore");
            levelThreeScore = localStorage.getItem("levelThreeScore");
            if (playerId == null) {
                // alert("you're not logged in");
                if (state == "initialized") {
                    openModalAccount(1);
                }
                else {
                    openModalAccount(0);
                }
                accountSideBarInfo1[0].style.display = "none";
                accountSideBarInfo2[0].style.display = "none";
            }
            else {
                // alert("logged in as " + localStorage.getItem("user"));
                for (let i = 0; i < accountSideBarBtn.length; i++) {
                    accountSideBarBtn[i].style.display = "none";
                }
                document.getElementsByClassName("accountSideBarBtn2")[0].style.display = "flex";
                accountSide.style.justifyContent = "start";
                accountSideBarInfo1[0].style.display = "inline";
                accountSideBarInfo2[0].style.display = "inline";
                accountSideBarInfo1[0].innerHTML = `Bermain sebagai : ${playerName}`;
                accountSideBarInfo2[0].innerHTML = `Kode akses : ${playerAccessCode}`;
                document.getElementById("currentRankCon").style.display = "block";
                document.getElementById("currentRankConMobile").style.display = "block";
                loginState = true;
                // location.href = "game.html";
            }
        }

        // fungsi untuk login
        const btnSubmit = document.getElementById("btnSubmit");
        const txtName = document.getElementById("txtName");
        const txtAccess = document.getElementById("txtAccess");
        function login() {
            const ajaxLogin = new XMLHttpRequest();
            ajaxLogin.onload = function () {
                const json = JSON.parse(this.responseText);
                console.log(json);
                if (json.message == "no data") {
                    document.getElementById("accountAlert").style.display = "inline";
                    checkPlayer("initialized");
                }
                else {
                    localStorage.setItem("playerId", json[0].playerId);
                    localStorage.setItem("playerName", json[0].playerName);
                    localStorage.setItem("playerAccessCode", json[0].playerAccessCode);
                    localStorage.setItem("levelOneScore", json[0].levelOneScore);
                    localStorage.setItem("levelTwoScore", json[0].levelTwoScore);
                    localStorage.setItem("levelThreeScore", json[0].levelThreeScore);
                    checkPlayer("init");
                    openModalAccount(0);
                    showSpinner();
                    setTimeout(function () { location.href = 'index.html'; }, 2000);
                }
            }
            ajaxLogin.open("POST", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php");
            ajaxLogin.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajaxLogin.send("submit=" + btnSubmit.value + "&" + "name=" + txtName.value + "&" + "access=" + txtAccess.value);
        }

        // fungsi untuk signup
        const txtNameDaftar = document.getElementById("txtNameDaftar");
        const btnSubmitDaftar = document.getElementById("btnSubmitDaftar");
        function signup() {
            const ajaxSignUp = new XMLHttpRequest();
            ajaxSignUp.onload = function () {
                let response = JSON.parse(this.responseText);
                if (response.message == "already-used") {
                    alert("nama pengguna sudah di pakai, pakai yang lain");
                }
                else if (response.message == "succes") {
                    alert("berhasil membuat akun player. Silahkan login menggunakan username : " + txtNameDaftar.value + " dan kode akses : " + response.accessCode);
                }
            }
            ajaxSignUp.open("POST", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php");
            ajaxSignUp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajaxSignUp.send("submit=" + btnSubmitDaftar.value + "&" + "name=" + txtNameDaftar.value + "&" + "signUp=signUp");
        }

        // fungsi untuk signout
        function signOut() {
            localStorage.removeItem("playerId");
            localStorage.removeItem("playerName");
            localStorage.removeItem("playerAccessCode");
            localStorage.removeItem("levelOneScore");
            localStorage.removeItem("levelTwoScore");
            localStorage.removeItem("levelThreeScore");
            localStorage.removeItem("level");
            location.href = "index.html";
        }

        // fungsi untuk mengubah level terpilih
        function changeLevel(level) {
            if (level == 1) {
                localStorage.setItem("level", "1");
            }
            if (level == 2) {
                localStorage.setItem("level", "2");
            }
            else if (level == 3) {
                localStorage.setItem("level", "3");
            }
        }

        checkPlayer("init");
        console.log(localStorage.getItem("playerId"));
        if (localStorage.getItem("playerId") == null) {
            levelOneScore = 0;
            levelTwoScore = 0;
            levelThreeScore = 0;
            playerRank = 0;
        }
        checkAccoundSideMenu();
        changeLevel(1);