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
       FOOTER YEAR
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


                const isOpen =
                    navLinks.classList.contains(
                        "open"
                    );


                menuToggle.textContent =
                    isOpen
                        ? "×"
                        : "☰";


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
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


            const clickedInsideNavbar =
                event.target.closest(
                    ".navbar"
                );


            if (
                !clickedInsideNavbar &&
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

            /* NAVIGATION */

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


            /* =================================================
               HERO
            ================================================= */

            availability:
                "TERBUKA UNTUK PELUANG",

            heroWelcome:
                "Halo 👋 Selamat datang di portofolio saya",

            heroIam:
                "Saya",

            education:
                "Mahasiswa D3 Teknologi Komputer",

            heroDescription:
                "Saya adalah mahasiswa D3 Teknologi Komputer yang berfokus pada Full-Stack Web Development. Saya membangun aplikasi web menggunakan PHP, Laravel, JavaScript, dan database, mulai dari pengembangan antarmuka hingga logika sistem dan pengelolaan data.",

            viewProjects:
                "Lihat Proyek",

            downloadCV:
                "Download CV",

            projectsBuilt:
                "Proyek",

            featuredProjects:
                "Proyek Utama",

            alwaysLearning:
                "Terus Belajar",

            creativeDeveloper:
                "Junior Full-Stack Web Developer",

            softwareDeveloper:
                "Junior Full-Stack Web Developer",

            webDevelopment:
                "Web Development",

            scrollDown:
                "Scroll Down ↓",


            /* =================================================
               ABOUT
            ================================================= */

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
                "Saya adalah mahasiswa D3 Teknologi Komputer di Institut Teknologi Del dengan fokus pada Full-Stack Web Development, khususnya pengembangan aplikasi menggunakan PHP, Laravel, JavaScript, dan database.",

            aboutParagraph2:
                "Saya mengembangkan kemampuan melalui proyek akademik dan proyek pribadi, mulai dari perancangan antarmuka, pengembangan backend, pengelolaan database, debugging, hingga penggunaan Git dan GitHub untuk version control.",

            letsConnect:
                "Mari terhubung",

            educationLabel:
                "PENDIDIKAN",

            institutionLabel:
                "INSTITUSI",

            focusLabel:
                "FOKUS",

            interestLabel:
                "SPESIALISASI",


            /* =================================================
               PROJECT
            ================================================= */

            projectLabel:
                "02 / PROYEK SAYA",

            projectTitle1:
                "Featured",

            projectTitle2:
                "Projects.",

            projectSubtitle:
                "Proyek utama yang menunjukkan pengalaman saya dalam pengembangan aplikasi web, backend, database, dan sistem digital.",

            featuredBadge:
                "PROYEK UTAMA",

            featuredProject:
                "PROYEK UNGGULAN",

            newProject:
                "PROYEK TERBARU",


            /* PROJECT LAMA - TETAP DIDUKUNG */

            hydroDescription:
                "Aplikasi berbasis web untuk membantu pengelolaan dan pemantauan sistem hidroponik.",

            coffeeDescription:
                "Website dengan fokus pada penyajian informasi, desain responsif, dan pengalaman pengguna.",

            takahDescription:
                "Proyek aplikasi untuk menerapkan konsep software development dan user interface.",

            dispenserDescription:
                "Sistem dispenser sebagai penerapan logika pemrograman dan pengembangan sistem.",

            ijabuDescription:
                "Aplikasi web yang dikembangkan sebagai bagian dari pembelajaran software dan teknologi web.",


            /* =================================================
               LAUNDRY PROJECT
            ================================================= */

            laundryDescription:
                "Aplikasi manajemen laundry berbasis Laravel yang dirancang untuk membantu pengelolaan pelanggan, layanan, transaksi, pembayaran, status laundry, dan laporan dalam satu sistem yang terstruktur dan mudah digunakan.",

            customerManagement:
                "Pelanggan",

            customerManagementDesc:
                "Mengelola data pelanggan.",

            transactionManagement:
                "Transaksi",

            transactionManagementDesc:
                "Mengelola pembayaran tunai dan kredit.",

            reportManagement:
                "Laporan",

            reportManagementDesc:
                "Monitoring transaksi dan data laundry.",

            viewGithub:
                "Lihat GitHub",

            viewDashboard:
                "Lihat Dashboard",

            contactMe:
                "Email",


            /* =================================================
               AGRICULTURE PROJECT
            ================================================= */

            agricultureTitle:
                "Sistem Penjadwalan Pertanian",

            agricultureDescription:
                "Platform digital yang membantu petani merencanakan, mencatat, dan memantau jadwal kegiatan pertanian secara lebih efisien, terstruktur, dan tepat waktu sehingga dapat meningkatkan produktivitas dan mengurangi kesalahan manual.",

            scheduleManagement:
                "Penjadwalan",

            scheduleManagementDesc:
                "Mengelola jadwal kegiatan pertanian.",

            agricultureManagement:
                "Pengelolaan Pertanian",

            agricultureManagementDesc:
                "Membantu aktivitas pertanian lebih terstruktur.",

            plantManagement:
                "Tanaman",

            plantManagementDesc:
                "Mengelola kegiatan dan data tanaman.",

            efficientSystem:
                "Sistem Efisien",

            efficientSystemDesc:
                "Mempermudah perencanaan kegiatan.",

            agricultureReport:
                "Laporan",

            agricultureReportDesc:
                "Monitoring panen dan pendapatan.",

            viewPoster:
                "Lihat Poster",

            viewAgricultureGithub:
                "Lihat GitHub",

            contactAboutProject:
                "Hubungi Saya",


            /* =================================================
               SKILLS
            ================================================= */

            skillsLabel:
                "03 / TECH STACK",

            skillsTitle1:
                "Skills &",

            skillsTitle2:
                "Technologies.",

            skillsSubtitle:
                "Teknologi, tools, dan konsep pengembangan yang saya gunakan dalam membangun aplikasi web dan software.",

            frontendDescription:
                "Membangun antarmuka website yang responsif, modern, interaktif, dan mudah digunakan.",

            backendDescription:
                "Mengembangkan logika aplikasi, pengolahan data, autentikasi, serta fitur CRUD pada sistem berbasis web.",

            databaseDescription:
                "Mengelola penyimpanan data, struktur tabel, relasi data, query, dan proses database.",

            mobileDescription:
                "Mempelajari pengembangan aplikasi lintas platform menggunakan Flutter dan Dart dengan fokus pada antarmuka pengguna.",

            softwareDescription:
                "Menerapkan konsep software engineering untuk menghasilkan program yang terstruktur, mudah dikembangkan, dan mudah dipelihara.",

            toolsDescription:
                "Menggunakan berbagai development tools untuk coding, version control, debugging, dependency management, dan pengelolaan proyek.",


            /* =================================================
               EXPERIENCE
            ================================================= */

            journeyLabel:
                "04 / PERJALANAN",

            experienceSubtitle:
                "Perjalanan pendidikan, pembelajaran, dan pengembangan kemampuan saya.",

            educationJourney:
                "Mempelajari pemrograman, database, pengembangan aplikasi, frontend, backend, software engineering, serta berbagai teknologi pendukung.",

            projectJourney:
                "Mengembangkan berbagai proyek akademik dan pribadi untuk meningkatkan kemampuan problem solving, web development, database, dan software development.",


            /* =================================================
               CERTIFICATES
            ================================================= */

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
                "Sertifikat pembelajaran dasar cybersecurity yang membahas keamanan digital, ancaman siber, perlindungan data, dan dasar keamanan jaringan.",

            pekanDescription:
                "Pengalaman mengikuti kompetisi teknologi informasi yang membantu mengembangkan kemampuan problem solving, kreativitas, dan pemahaman teknologi.",

            fitDescription:
                "Kompetisi teknologi yang memberikan pengalaman dalam mengembangkan kreativitas, kemampuan teknis, kerja sama tim, dan problem solving.",


            /* =================================================
               ORGANIZATION
            ================================================= */

            organizationLabel:
                "06 / ORGANISASI",

            organizationHeading1:
                "Organisasi &",

            organizationHeading2:
                "Kepanitiaan.",

            organizationSubtitle:
                "Pengalaman organisasi dan kepanitiaan yang membantu saya mengembangkan kemampuan komunikasi, teamwork, kreativitas, tanggung jawab, dan koordinasi kegiatan.",

            activeOrganization:
                "AKTIF",

            committeeBadge:
                "PANITIA",

            eventCommitteeBadge:
                "PANITIA ACARA",

            himatekDescription:
                "Berkontribusi dalam kegiatan publikasi dan penyebaran informasi untuk program HIMATEK serta kegiatan mahasiswa. Membantu menyiapkan konten promosi dan informasi organisasi serta bekerja sama dengan anggota lain agar informasi dapat disampaikan dengan jelas dan tepat waktu.",

            contentPublication:
                "Publikasi Konten",

            contentPublicationDesc:
                "Menyiapkan konten informasi dan promosi.",

            teamCollaboration:
                "Kolaborasi Tim",

            teamCollaborationDesc:
                "Berkoordinasi dengan anggota organisasi.",

            kpuDescription:
                "Berpartisipasi sebagai anggota panitia dalam proses pemilihan organisasi mahasiswa HIMATEK. Membantu persiapan dan koordinasi kegiatan pemilihan serta bekerja sama dengan anggota panitia lainnya agar proses berjalan terorganisir dan tertib.",

            idgDescription:
                "Berpartisipasi dalam persiapan dan pelaksanaan kegiatan IDG 2026. Membantu koordinasi acara, menyelesaikan tanggung jawab yang diberikan, serta bekerja sama dengan anggota panitia untuk mendukung kelancaran kegiatan.",


            /* =================================================
               CONTACT
            ================================================= */

            contactTitle1:
                "Mari Bangun Sesuatu",

            contactTitle2:
                "Bersama.",

            contactDescription:
                "Saya terbuka untuk kesempatan magang, kolaborasi, proyek, dan diskusi terkait Full-Stack Web Development, PHP, Laravel, serta Software Development.",

            sendEmail:
                "Kirim Email",

            footerText:
                "Dibangun dengan semangat untuk terus belajar dan berkembang."

        },


        /* =====================================================
           ENGLISH
        ===================================================== */

        en: {

            /* NAVIGATION */

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


            /* =================================================
               HERO
            ================================================= */

            availability:
                "OPEN TO OPPORTUNITIES",

            heroWelcome:
                "Hello 👋 Welcome to my portfolio",

            heroIam:
                "I'm",

            education:
                "Computer Technology Diploma Student",

            heroDescription:
                "I am a Computer Technology diploma student focused on Full-Stack Web Development. I build web applications using PHP, Laravel, JavaScript, and database technologies, from user interface development to application logic and data management.",

            viewProjects:
                "View Projects",

            downloadCV:
                "Download CV",

            projectsBuilt:
                "Projects",

            featuredProjects:
                "Featured Projects",

            alwaysLearning:
                "Always Learning",

            creativeDeveloper:
                "Junior Full-Stack Web Developer",

            softwareDeveloper:
                "Junior Full-Stack Web Developer",

            webDevelopment:
                "Web Development",

            scrollDown:
                "Scroll Down ↓",


            /* =================================================
               ABOUT
            ================================================= */

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
                "I am a Computer Technology diploma student at Institut Teknologi Del focused on Full-Stack Web Development, especially building applications using PHP, Laravel, JavaScript, and database technologies.",

            aboutParagraph2:
                "I develop my skills through academic and personal projects covering user interface development, backend development, database management, debugging, and Git/GitHub version control.",

            letsConnect:
                "Let's connect",

            educationLabel:
                "EDUCATION",

            institutionLabel:
                "INSTITUTION",

            focusLabel:
                "FOCUS",

            interestLabel:
                "SPECIALIZATION",


            /* =================================================
               PROJECT
            ================================================= */

            projectLabel:
                "02 / MY PROJECTS",

            projectTitle1:
                "Featured",

            projectTitle2:
                "Projects.",

            projectSubtitle:
                "Featured projects showcasing my experience in web application, backend, database, and digital system development.",

            featuredBadge:
                "FEATURED",

            featuredProject:
                "FEATURED PROJECT",

            newProject:
                "NEW PROJECT",


            /* OLD PROJECT SUPPORT */

            hydroDescription:
                "A web-based application designed to help manage and monitor hydroponic systems.",

            coffeeDescription:
                "A website focused on information delivery, responsive design, and user experience.",

            takahDescription:
                "An application project created to apply software development and user interface concepts.",

            dispenserDescription:
                "A dispenser system created to apply programming logic and system development concepts.",

            ijabuDescription:
                "A web application developed as part of my learning experience in software and web technologies.",


            /* =================================================
               LAUNDRY
            ================================================= */

            laundryDescription:
                "A Laravel-based laundry management application designed to manage customers, services, transactions, payments, laundry status, and reports within one structured and user-friendly system.",

            customerManagement:
                "Customers",

            customerManagementDesc:
                "Manage customer information.",

            transactionManagement:
                "Transactions",

            transactionManagementDesc:
                "Manage cash and credit payments.",

            reportManagement:
                "Reports",

            reportManagementDesc:
                "Monitor laundry data and transactions.",

            viewGithub:
                "View GitHub",

            viewDashboard:
                "View Dashboard",

            contactMe:
                "Email",


            /* =================================================
               AGRICULTURE
            ================================================= */

            agricultureTitle:
                "Agricultural Scheduling System",

            agricultureDescription:
                "A digital platform designed to help farmers plan, record, and monitor agricultural activity schedules efficiently, systematically, and on time to improve productivity and reduce manual errors.",

            scheduleManagement:
                "Scheduling",

            scheduleManagementDesc:
                "Manage agricultural activity schedules.",

            agricultureManagement:
                "Agriculture Management",

            agricultureManagementDesc:
                "Keep farming activities more structured.",

            plantManagement:
                "Plants",

            plantManagementDesc:
                "Manage plant activities and data.",

            efficientSystem:
                "Efficient System",

            efficientSystemDesc:
                "Simplify activity planning.",

            agricultureReport:
                "Reports",

            agricultureReportDesc:
                "Monitor harvests and income.",

            viewPoster:
                "View Poster",

            viewAgricultureGithub:
                "View GitHub",

            contactAboutProject:
                "Contact Me",


            /* =================================================
               SKILLS
            ================================================= */

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
                "Developing application logic, data processing, authentication, and CRUD features for web-based systems.",

            databaseDescription:
                "Managing data storage, table structures, relationships, queries, and database operations.",

            mobileDescription:
                "Learning cross-platform application development using Flutter and Dart with a focus on user interfaces.",

            softwareDescription:
                "Applying software engineering concepts to create structured, maintainable, and extensible programs.",

            toolsDescription:
                "Using development tools for coding, version control, debugging, dependency management, and project management.",


            /* =================================================
               EXPERIENCE
            ================================================= */

            journeyLabel:
                "04 / JOURNEY",

            experienceSubtitle:
                "My educational journey, learning process, and skills development.",

            educationJourney:
                "Learning programming, databases, application development, frontend, backend, software engineering, and supporting technologies.",

            projectJourney:
                "Developing academic and personal projects to improve problem-solving, web development, database, and software development skills.",


            /* =================================================
               CERTIFICATES
            ================================================= */

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
                "A foundational cybersecurity learning experience covering digital security, cyber threats, data protection, and network security fundamentals.",

            pekanDescription:
                "An information technology competition experience that helped develop problem-solving, creativity, and technology skills.",

            fitDescription:
                "A technology competition experience that helped develop creativity, technical skills, teamwork, and problem-solving abilities.",


            /* =================================================
               ORGANIZATION
            ================================================= */

            organizationLabel:
                "06 / ORGANIZATION",

            organizationHeading1:
                "Organization &",

            organizationHeading2:
                "Committees.",

            organizationSubtitle:
                "Organizational and committee experiences that have strengthened my communication, teamwork, creativity, responsibility, and event coordination skills.",

            activeOrganization:
                "ACTIVE",

            committeeBadge:
                "COMMITTEE",

            eventCommitteeBadge:
                "EVENT COMMITTEE",

            himatekDescription:
                "Contributed to publication and information-sharing activities for HIMATEK programs and student events. Assisted in preparing promotional and informational content while collaborating with other members to ensure information was communicated clearly and on time.",

            contentPublication:
                "Content Publication",

            contentPublicationDesc:
                "Prepared promotional and informational content.",

            teamCollaboration:
                "Team Collaboration",

            teamCollaborationDesc:
                "Coordinated with organization members.",

            kpuDescription:
                "Participated as a committee member in the HIMATEK student organization election process. Assisted in preparing and coordinating election activities while collaborating with other committee members to support an organized and orderly election process.",

            idgDescription:
                "Participated in the preparation and implementation of IDG 2026 activities. Assisted with event coordination, completed assigned responsibilities, and collaborated with committee members to support the smooth implementation of the event.",


            /* =================================================
               CONTACT
            ================================================= */

            contactTitle1:
                "Let's Build Something",

            contactTitle2:
                "Great Together.",

            contactDescription:
                "I am open to internship opportunities, collaborations, projects, and discussions related to Full-Stack Web Development, PHP, Laravel, and Software Development.",

            sendEmail:
                "Send Email",

            footerText:
                "Built with passion and a commitment to keep learning and growing."

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
       ROLE TYPING ANIMATION
    ===================================================== */

    const roleTranslations = {

        id: [

            "Junior Full-Stack Web Developer",

            "Laravel Developer",

            "PHP Developer",

            "Software Developer"

        ],

        en: [

            "Junior Full-Stack Web Developer",

            "Laravel Developer",

            "PHP Developer",

            "Software Developer"

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
            roleTranslations[
                currentLanguage
            ];


        const currentRole =
            roles[
                roleIndex
            ];


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
                : 80;


        if (
            !deleting &&
            charIndex ===
                currentRole.length
        ) {

            deleting = true;

            speed = 1500;

        }

        else if (
            deleting &&
            charIndex === 0
        ) {

            deleting = false;


            roleIndex =
                (
                    roleIndex + 1
                ) % roles.length;


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

            typedRole.textContent =
                "";

        }


        typeEffect();

    }


    /* =====================================================
       CHANGE LANGUAGE
    ===================================================== */

    function changeLanguage(
        language
    ) {

        if (
            !translations[
                language
            ]
        ) {

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


                    const translation =
                        translations[
                            language
                        ][
                            key
                        ];


                    if (
                        translation !==
                        undefined
                    ) {

                        element.textContent =
                            translation;

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


        /* UPDATE PAGE TITLE */

        if (
            language === "id"
        ) {

            document.title =
                "Tania Mutiara Panjaitan | Junior Full-Stack Web Developer";


            if (metaDescription) {

                metaDescription.content =
                    "Portfolio Tania Mutiara Panjaitan - Junior Full-Stack Web Developer, PHP & Laravel Developer, dan mahasiswa D3 Teknologi Komputer Institut Teknologi Del.";

            }

        } else {

            document.title =
                "Tania Mutiara Panjaitan | Junior Full-Stack Web Developer";


            if (metaDescription) {

                metaDescription.content =
                    "Portfolio of Tania Mutiara Panjaitan, Junior Full-Stack Web Developer focused on PHP, Laravel, JavaScript, and database development.";

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

                function (
                    entries
                ) {

                    entries.forEach(
                        function (
                            entry
                        ) {

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

    }

    else {

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

                function (
                    entries
                ) {

                    entries.forEach(
                        function (
                            entry
                        ) {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            navItems.forEach(
                                function (
                                    link
                                ) {

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
            function (
                section
            ) {

                navigationObserver.observe(
                    section
                );

            }
        );

    }


    /* =====================================================
       START WEBSITE
    ===================================================== */

    changeLanguage(
        currentLanguage
    );

});