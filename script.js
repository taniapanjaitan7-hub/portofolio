document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const year =
        document.getElementById("year");

    const profileImage =
        document.getElementById("profileImage");

    const profileFallback =
        document.getElementById("profileFallback");

    const themeToggle =
        document.getElementById("themeToggle");

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");

    const typedRole =
        document.getElementById("typedRole");

    const languageButtons =
        document.querySelectorAll(".lang-btn");

    const metaDescription =
        document.querySelector(
            'meta[name="description"]'
        );


    /* =====================================================
       YEAR
    ===================================================== */

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       PROFILE IMAGE FALLBACK
    ===================================================== */

    if (profileImage) {

        profileImage.addEventListener(
            "error",
            function () {

                profileImage.style.display =
                    "none";

                if (profileFallback) {

                    profileFallback.style.display =
                        "grid";

                }

            }
        );

    }


    /* =====================================================
       DARK MODE
    ===================================================== */

    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

    }


    function updateThemeButton() {

        if (!themeToggle) {
            return;
        }


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        themeToggle.textContent =
            isDark
                ? "☀"
                : "☾";


        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? "Gunakan mode terang"
                : "Gunakan mode gelap"
        );

    }


    updateThemeButton();


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark"
                );


                const isDark =
                    document.body.classList.contains(
                        "dark"
                    );


                localStorage.setItem(
                    "portfolio-theme",
                    isDark
                        ? "dark"
                        : "light"
                );


                updateThemeButton();

            }
        );

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function closeMenu() {

        if (
            !navLinks ||
            !menuToggle
        ) {
            return;
        }


        navLinks.classList.remove(
            "open"
        );


        menuToggle.textContent =
            "☰";


        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (
        navLinks &&
        menuToggle
    ) {

        menuToggle.addEventListener(
            "click",
            function () {

                navLinks.classList.toggle(
                    "open"
                );


                const opened =
                    navLinks.classList.contains(
                        "open"
                    );


                menuToggle.textContent =
                    opened
                        ? "×"
                        : "☰";


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(opened)
                );

            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        closeMenu
                    );

                }
            );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


    document.addEventListener(
        "click",
        function (event) {

            if (
                !navLinks ||
                !menuToggle
            ) {
                return;
            }


            const clickedNavbar =
                event.target.closest(
                    ".navbar"
                );


            if (
                !clickedNavbar &&
                navLinks.classList.contains(
                    "open"
                )
            ) {

                closeMenu();

            }

        }
    );


    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 900) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {


        /* =================================================
           INDONESIA
        ================================================= */

        id: {

            /* NAVBAR */

            navHome:
                "Beranda",

            navAbout:
                "Tentang",

            navProjects:
                "Proyek",

            navSkills:
                "Keahlian",

            navExperience:
                "Pengalaman",

            navCertificates:
                "Sertifikat",

            navOrganization:
                "Organisasi",

            navContact:
                "Kontak",


            /* HERO */

            availability:
                "TERBUKA UNTUK PELUANG",

            heroWelcome:
                "Halo 👋 Selamat datang di portofolio saya",

            heroIam:
                "Saya",

            education:
                "Mahasiswa D3 Teknologi Komputer",

            heroDescription:
                "Saya membangun website dan aplikasi yang modern, responsif, dan mudah digunakan. Saya terus mengembangkan kemampuan web development dan software development melalui proyek nyata, pembelajaran teknologi, dan eksplorasi sistem baru.",

            viewProjects:
                "Lihat Proyek",

            downloadCV:
                "Download CV",

            featuredProjects:
                "Proyek Utama",

            alwaysLearning:
                "Terus Belajar",

            softwareDeveloper:
                "Software Developer",

            scrollDown:
                "Scroll Down ↓",


            /* ABOUT */

            aboutLabel:
                "01 / TENTANG SAYA",

            aboutTitle1:
                "Tentang",

            aboutTitle2:
                "Saya.",

            aboutSubtitle:
                "Mengenal saya lebih dekat.",

            whoAmI:
                "SIAPA SAYA?",

            aboutHello:
                "Halo! Saya Tania 👋",

            aboutParagraph1:
                "Saya adalah mahasiswa D3 Teknologi Komputer di Institut Teknologi Del yang memiliki minat pada web development, software development, dan teknologi digital.",

            aboutParagraph2:
                "Saya mengembangkan kemampuan melalui proyek akademik dan pribadi menggunakan teknologi frontend, backend, database, mobile development, Git, dan GitHub.",

            letsConnect:
                "Mari terhubung",

            educationLabel:
                "PENDIDIKAN",

            institutionLabel:
                "INSTITUSI",

            focusLabel:
                "FOKUS",

            interestLabel:
                "MINAT",


            /* PROJECTS */

            projectLabel:
                "02 / PROYEK SAYA",

            projectTitle1:
                "Featured",

            projectTitle2:
                "Projects.",

            projectSubtitle:
                "Dua proyek utama yang menunjukkan pengalaman saya dalam pengembangan aplikasi web dan sistem digital.",

            featuredBadge:
                "PROYEK UTAMA",

            viewDashboard:
                "Lihat Dashboard",

            viewPoster:
                "Lihat Poster",

            viewGithub:
                "GitHub",

            contactMe:
                "Email",

            laundryDescription:
                "Aplikasi manajemen laundry berbasis Laravel yang membantu pengelolaan pelanggan, layanan, transaksi, pembayaran, status laundry, dan laporan dalam satu sistem yang terstruktur.",

            customerManagement:
                "Pelanggan",

            customerManagementDesc:
                "Kelola data pelanggan.",

            transactionManagement:
                "Transaksi",

            transactionManagementDesc:
                "Tunai dan kredit.",

            reportManagement:
                "Laporan",

            reportManagementDesc:
                "Monitoring transaksi.",


            /* AGRICULTURE */

            agricultureTitle:
                "Sistem Penjadwalan Pertanian",

            agricultureDescription:
                "Platform digital untuk membantu petani merencanakan, mencatat, dan memantau jadwal kegiatan pertanian secara efisien, terstruktur, dan tepat waktu sehingga dapat meningkatkan produktivitas dan mengurangi kesalahan manual.",

            scheduleManagement:
                "Penjadwalan",

            scheduleManagementDesc:
                "Atur jadwal pertanian.",

            plantManagement:
                "Tanaman",

            plantManagementDesc:
                "Kelola kegiatan tanaman.",

            agricultureReport:
                "Laporan",

            agricultureReportDesc:
                "Panen dan pendapatan.",


            /* SKILLS */

            skillsLabel:
                "03 / TECH STACK",

            skillsTitle1:
                "Skills &",

            skillsTitle2:
                "Technologies.",

            skillsSubtitle:
                "Teknologi, tools, dan konsep pengembangan yang saya gunakan dalam membangun aplikasi web dan software.",

            frontendDescription:
                "Membangun tampilan website yang responsif, modern, interaktif, dan mudah digunakan.",

            backendDescription:
                "Mengembangkan logika aplikasi, pengolahan data, serta fitur CRUD pada sistem berbasis web.",

            databaseDescription:
                "Mengelola penyimpanan data, struktur tabel, relasi data, dan proses database.",

            mobileDescription:
                "Mempelajari pengembangan aplikasi lintas platform dengan fokus pada antarmuka pengguna.",

            softwareDescription:
                "Menerapkan konsep pengembangan software untuk menghasilkan program yang terstruktur dan mudah dikembangkan.",

            toolsDescription:
                "Menggunakan berbagai tools untuk development, version control, dan pengelolaan proyek.",


            /* EXPERIENCE */

            journeyLabel:
                "04 / PERJALANAN",

            experienceSubtitle:
                "Perjalanan pendidikan, pembelajaran, dan pengembangan kemampuan saya.",

            educationJourney:
                "Mempelajari pemrograman, database, pengembangan aplikasi, frontend, backend, dan software development.",

            projectJourney:
                "Mengembangkan berbagai proyek akademik dan pribadi untuk meningkatkan kemampuan problem solving dan software development.",


            /* CERTIFICATES */

            achievementLabel:
                "05 / PENCAPAIAN",

            certificateTitle1:
                "Sertifikat &",

            certificateTitle2:
                "Pencapaian.",

            certificateSubtitle:
                "Sertifikasi dan kompetisi yang saya ikuti sebagai bagian dari proses belajar dan pengembangan kemampuan teknologi.",

            viewCertificate:
                "Lihat Sertifikat",

            certificationBadge:
                "SERTIFIKASI",

            competitionBadge:
                "KOMPETISI",

            activityBadge:
                "KEGIATAN",

            relatedSkills:
                "Keahlian Terkait",

            ciscoDescription:
                "Sertifikat pembelajaran dasar cybersecurity mengenai keamanan digital, ancaman siber, perlindungan data, dan keamanan jaringan.",

            pekanDescription:
                "Pengalaman mengikuti kompetisi teknologi informasi yang membantu mengembangkan problem solving dan kemampuan teknologi.",

            fitDescription:
                "Kompetisi teknologi yang memberikan pengalaman mengembangkan kreativitas, kemampuan teknis, kerja sama, dan problem solving.",


            /* ORGANIZATION */

            organizationLabel:
                "06 / ORGANISASI",

            organizationHeading1:
                "Organisasi &",

            organizationHeading2:
                "Kepanitiaan.",

            organizationSubtitle:
                "Pengalaman organisasi dan kepanitiaan yang membantu saya mengembangkan komunikasi, teamwork, kreativitas, dan tanggung jawab.",

            activeOrganization:
                "AKTIF",

            committeeBadge:
                "PANITIA",

            eventCommitteeBadge:
                "PANITIA ACARA",

            himatekDescription:
                "Berkontribusi dalam kegiatan publikasi dan penyebaran informasi program HIMATEK serta kegiatan mahasiswa. Membantu menyiapkan konten promosi dan informasi agar dapat disampaikan dengan jelas dan tepat waktu.",

            kpuDescription:
                "Berpartisipasi dalam proses pemilihan organisasi mahasiswa HIMATEK serta membantu persiapan dan koordinasi kegiatan agar proses pemilihan berlangsung terorganisir dan tertib.",

            idgDescription:
                "Berpartisipasi dalam persiapan dan pelaksanaan IDG 2026, membantu koordinasi acara, serta bekerja sama dengan anggota panitia untuk mendukung kelancaran kegiatan.",


            /* CONTACT */

            contactTitle1:
                "Mari Bangun Sesuatu",

            contactTitle2:
                "Bersama.",

            contactDescription:
                "Saya terbuka untuk kesempatan magang, kolaborasi, proyek, maupun diskusi mengenai web development dan software development.",

            sendEmail:
                "Kirim Email",

            footerText:
                "Dibangun dengan semangat untuk terus belajar."

        },



        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            /* NAVBAR */

            navHome:
                "Home",

            navAbout:
                "About",

            navProjects:
                "Projects",

            navSkills:
                "Skills",

            navExperience:
                "Experience",

            navCertificates:
                "Certificates",

            navOrganization:
                "Organization",

            navContact:
                "Contact",


            /* HERO */

            availability:
                "OPEN TO OPPORTUNITIES",

            heroWelcome:
                "Hello 👋 Welcome to my portfolio",

            heroIam:
                "I'm",

            education:
                "Computer Technology Diploma Student",

            heroDescription:
                "I build modern, responsive, and user-friendly websites and applications. I continuously develop my web and software development skills through real projects, technology learning, and system exploration.",

            viewProjects:
                "View Projects",

            downloadCV:
                "Download CV",

            featuredProjects:
                "Featured Projects",

            alwaysLearning:
                "Always Learning",

            softwareDeveloper:
                "Software Developer",

            scrollDown:
                "Scroll Down ↓",


            /* ABOUT */

            aboutLabel:
                "01 / ABOUT ME",

            aboutTitle1:
                "About",

            aboutTitle2:
                "Me.",

            aboutSubtitle:
                "Get to know me better.",

            whoAmI:
                "WHO AM I?",

            aboutHello:
                "Hello! I'm Tania 👋",

            aboutParagraph1:
                "I am a Computer Technology diploma student at Institut Teknologi Del with an interest in web development, software development, and digital technology.",

            aboutParagraph2:
                "I develop my skills through academic and personal projects using frontend, backend, databases, mobile development, Git, and GitHub.",

            letsConnect:
                "Let's connect",

            educationLabel:
                "EDUCATION",

            institutionLabel:
                "INSTITUTION",

            focusLabel:
                "FOCUS",

            interestLabel:
                "INTEREST",


            /* PROJECTS */

            projectLabel:
                "02 / MY PROJECTS",

            projectTitle1:
                "Featured",

            projectTitle2:
                "Projects.",

            projectSubtitle:
                "Two featured projects showcasing my experience in web application and digital system development.",

            featuredBadge:
                "FEATURED",

            viewDashboard:
                "View Dashboard",

            viewPoster:
                "View Poster",

            viewGithub:
                "GitHub",

            contactMe:
                "Email",

            laundryDescription:
                "A Laravel-based laundry management application designed to manage customers, services, transactions, payments, laundry status, and reports in one structured system.",

            customerManagement:
                "Customers",

            customerManagementDesc:
                "Manage customer data.",

            transactionManagement:
                "Transactions",

            transactionManagementDesc:
                "Cash and credit.",

            reportManagement:
                "Reports",

            reportManagementDesc:
                "Monitor transactions.",


            /* AGRICULTURE */

            agricultureTitle:
                "Agricultural Scheduling System",

            agricultureDescription:
                "A digital platform designed to help farmers plan, record, and monitor agricultural activity schedules efficiently, systematically, and on time to improve productivity and reduce manual errors.",

            scheduleManagement:
                "Scheduling",

            scheduleManagementDesc:
                "Manage farming schedules.",

            plantManagement:
                "Plants",

            plantManagementDesc:
                "Manage plant activities.",

            agricultureReport:
                "Reports",

            agricultureReportDesc:
                "Harvests and income.",


            /* SKILLS */

            skillsLabel:
                "03 / TECH STACK",

            skillsTitle1:
                "Skills &",

            skillsTitle2:
                "Technologies.",

            skillsSubtitle:
                "Technologies, tools, and development concepts I use to build web applications and software.",

            frontendDescription:
                "Building responsive, modern, interactive, and user-friendly web interfaces.",

            backendDescription:
                "Developing application logic, data processing, and CRUD features for web-based systems.",

            databaseDescription:
                "Managing data storage, table structures, relationships, and database operations.",

            mobileDescription:
                "Learning cross-platform application development with a focus on user interfaces.",

            softwareDescription:
                "Applying software development concepts to create structured and maintainable programs.",

            toolsDescription:
                "Using development tools for coding, version control, and project management.",


            /* EXPERIENCE */

            journeyLabel:
                "04 / JOURNEY",

            experienceSubtitle:
                "My educational journey, learning process, and skill development.",

            educationJourney:
                "Learning programming, databases, application development, frontend, backend, and software development.",

            projectJourney:
                "Developing academic and personal projects to improve problem-solving and software development skills.",


            /* CERTIFICATES */

            achievementLabel:
                "05 / ACHIEVEMENTS",

            certificateTitle1:
                "Certificates &",

            certificateTitle2:
                "Achievements.",

            certificateSubtitle:
                "Certifications and competitions that support my learning journey and technology skill development.",

            viewCertificate:
                "View Certificate",

            certificationBadge:
                "CERTIFICATION",

            competitionBadge:
                "COMPETITION",

            activityBadge:
                "ACTIVITY",

            relatedSkills:
                "Related Skills",

            ciscoDescription:
                "A foundational cybersecurity learning experience covering digital security, cyber threats, data protection, and network security.",

            pekanDescription:
                "An information technology competition experience that helped develop problem-solving and technology skills.",

            fitDescription:
                "A technology competition experience that helped develop creativity, technical skills, teamwork, and problem-solving abilities.",


            /* ORGANIZATION */

            organizationLabel:
                "06 / ORGANIZATION",

            organizationHeading1:
                "Organization &",

            organizationHeading2:
                "Committees.",

            organizationSubtitle:
                "Organizational and committee experiences that have strengthened my communication, teamwork, creativity, and responsibility.",

            activeOrganization:
                "ACTIVE",

            committeeBadge:
                "COMMITTEE",

            eventCommitteeBadge:
                "EVENT COMMITTEE",

            himatekDescription:
                "Contributed to publication and information-sharing activities for HIMATEK programs and student events. Assisted in preparing promotional and informational content to ensure information was communicated clearly and on time.",

            kpuDescription:
                "Participated in the HIMATEK student organization election process and assisted with preparation and coordination to support an organized and orderly election process.",

            idgDescription:
                "Participated in the preparation and implementation of IDG 2026, assisted with event coordination, and collaborated with committee members to support a successful event.",


            /* CONTACT */

            contactTitle1:
                "Let's Build Something",

            contactTitle2:
                "Great Together.",

            contactDescription:
                "I am open to internship opportunities, collaborations, projects, and discussions related to web development and software development.",

            sendEmail:
                "Send Email",

            footerText:
                "Built with passion and a commitment to keep learning."

        }

    };


    /* =====================================================
       LANGUAGE STATE
    ===================================================== */

    let currentLanguage =
        localStorage.getItem(
            "portfolio-language"
        ) || "id";


    /* =====================================================
       TYPING ANIMATION
    ===================================================== */

    const roleTranslations = {

        id: [
            "Web Developer",
            "Software Developer",
            "Frontend Developer",
            "Backend Developer"
        ],

        en: [
            "Web Developer",
            "Software Developer",
            "Frontend Developer",
            "Backend Developer"
        ]

    };


    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let typingTimer;


    function typeEffect() {

        if (!typedRole) {
            return;
        }


        const roles =
            roleTranslations[currentLanguage];


        const currentRole =
            roles[roleIndex];


        if (deleting) {

            charIndex--;

        } else {

            charIndex++;

        }


        typedRole.textContent =
            currentRole.substring(
                0,
                charIndex
            );


        let speed =
            deleting
                ? 45
                : 85;


        if (
            !deleting &&
            charIndex === currentRole.length
        ) {

            deleting = true;

            speed = 1400;

        }

        else if (
            deleting &&
            charIndex === 0
        ) {

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                % roles.length;

            speed = 350;

        }


        typingTimer =
            setTimeout(
                typeEffect,
                speed
            );

    }


    function restartTyping() {

        clearTimeout(
            typingTimer
        );


        roleIndex = 0;
        charIndex = 0;
        deleting = false;


        if (typedRole) {

            typedRole.textContent = "";

        }


        typeEffect();

    }


    /* =====================================================
       CHANGE LANGUAGE
    ===================================================== */

    function changeLanguage(language) {

        if (!translations[language]) {
            return;
        }


        currentLanguage =
            language;


        document
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n"
                        );


                    const value =
                        translations[language][key];


                    if (value !== undefined) {

                        element.textContent =
                            value;

                    }

                }
            );


        languageButtons.forEach(
            function (button) {

                const active =
                    button.dataset.lang ===
                    language;


                button.classList.toggle(
                    "active",
                    active
                );


                button.setAttribute(
                    "aria-pressed",
                    String(active)
                );

            }
        );


        document.documentElement.lang =
            language;


        if (language === "id") {

            document.title =
                "Tania Mutiara Panjaitan | Portfolio";


            if (metaDescription) {

                metaDescription.content =
                    "Portfolio Tania Mutiara Panjaitan - Web Developer, Software Developer, dan mahasiswa D3 Teknologi Komputer Institut Teknologi Del.";

            }

        } else {

            document.title =
                "Tania Mutiara Panjaitan | Developer Portfolio";


            if (metaDescription) {

                metaDescription.content =
                    "Portfolio of Tania Mutiara Panjaitan, Web Developer, Software Developer, and Computer Technology diploma student at Institut Teknologi Del.";

            }

        }


        localStorage.setItem(
            "portfolio-language",
            language
        );


        restartTyping();

    }


    languageButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    changeLanguage(
                        button.dataset.lang
                    );

                }
            );

        }
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "visible"
                                    );


                                revealObserver
                                    .unobserve(
                                        entry.target
                                    );

                            }

                        }
                    );

                },

                {
                    threshold: 0.08
                }

            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const navigationObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            navItems.forEach(
                                function (link) {

                                    const href =
                                        link.getAttribute(
                                            "href"
                                        );


                                    link.classList.toggle(
                                        "active",
                                        href ===
                                            "#" +
                                            entry.target.id
                                    );

                                }
                            );

                        }
                    );

                },

                {
                    rootMargin:
                        "-25% 0px -65% 0px"
                }

            );


        sections.forEach(
            function (section) {

                navigationObserver.observe(
                    section
                );

            }
        );

    }


    /* =====================================================
       START
    ===================================================== */

    changeLanguage(
        currentLanguage
    );

});