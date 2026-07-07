        const SCHOOL_FOUNDED_YEAR = 1957;

        // 初始化 Lucide 图标
        lucide.createIcons();

        // ═══════════════════════════════════════════════════════════════
        //  萌新维护指南：新闻与图片数据配置区
        //  你只需要改下面的数组，完全不用碰 HTML 标签！
        // ═══════════════════════════════════════════════════════════════

        // 【通知公告】格式：
        // { month: '06', day: '01', tag: 'NEW', title: '标题', desc: '摘要' }
        // 不需要标签时，去掉 tag 字段即可
        const noticeData = [
            { month: '06', day: '07', tag: 'NEW', title: '2026年初中招生简章已上线', desc: '初中招生简章页面已开放，可查看招生范围、报名流程、咨询方式等信息。' },
            { month: '06', day: '07', title: '请关注学校官方通知获取最新校历信息', desc: '校历安排以市教育局最终通知为准，节假日安排按国家及大连市相关规定执行。' },
            { month: '06', day: '07', title: '2025年校园升级改造焕新工程全面启动', desc: '学校持续完善校园环境与教学空间，推进现代化校园建设。' },
        ];

        if (typeof window !== 'undefined') {
            window.noticeData = window.noticeData || noticeData;
            window.noticedata = window.noticedata || window.noticeData;
        }

        // 【校园新闻】格式：
        // { type: 'featured', date: '2026-05-20', tag: '校园活动', image: '图片地址', title: '标题', desc: '摘要' }
        // { type: 'normal',  date: '2026-05-15', image: '图片地址', title: '标题' }
        const newsData = [
            { type: 'featured', date: '2025', tag: '校园建设', image: './images/新教学楼外景.jpg', title: '2025年校园升级改造焕新工程全面启动', desc: '学校持续完善校园环境与教学空间，推进现代化校园建设，为师生提供更优质的学习与成长环境。' },
            { type: 'normal', date: '2024-10', image: './images/宣传海报.jpg', title: '我校获评辽宁省特色普通高中' },
            { type: 'normal', date: '2024', image: './images/校园活动.JPG', title: '和雅教育特色课程与校园活动持续开展' },
            { type: 'normal', date: '2024', image: './images/毕业典礼.jpg', title: '桃李芬芳毕业季，五中学子奔赴新征程' },
        ];

        if (typeof window !== 'undefined') {
            window.newsData = window.newsData || newsData;
            window.newsdata = window.newsdata || window.newsData;
        }

        // 【校园风光图片】格式：
        // { src: '图片地址', caption: '图片说明' }
        // 想加图就复制一行，想删图就删掉一行
        const campusImages = [
            { src: './images/新教学楼外景.jpg', caption: '新教学楼外景' },
            { src: './images/新教学楼内景.jpg', caption: '新教学楼内景' },
            { src: './images/鸟瞰全景.jpg', caption: '校园鸟瞰全景' },
            { src: './images/教室照片.jpg', caption: '和雅多功能教室' },
            { src: './images/校园活动.JPG', caption: '阳光大课间' },
            { src: './images/毕业典礼.jpg', caption: '桃李芬芳毕业季' },
            { src: './images/新楼正门内景.jpg', caption: '新楼正门内景' },
            { src: './images/宣传海报.jpg', caption: '校园宣传海报' },
            { src: './images/体育馆报告厅外景.jpg', caption: '体育馆报告厅外景' },
            { src: './images/足球文化.jpg', caption: '特色足球文化' },
            { src: './images/传媒艺术.jpg', caption: '传媒艺术课程' },
            { src: './images/2023,2024级学生.jpg', caption: '五中学子风采' },
        ];

        if (typeof window !== 'undefined') {
            window.campusImages = window.campusImages || campusImages;
            window.campusimages = window.campusimages || window.campusImages;
        }
        // ═══════════════════════════════════════════════════════════════
        //  数据配置区结束 —— 下面不用改
        // ═══════════════════════════════════════════════════════════════

        function getNoticeData() {
            if (typeof window === 'undefined') return noticeData;
            return window.noticeData ?? window.noticedata ?? noticeData;
        }

        function getNewsData() {
            if (typeof window === 'undefined') return newsData;
            return window.newsData ?? window.newsdata ?? newsData;
        }

        function getCampusImageData() {
            const data = typeof window === 'undefined'
                ? campusImages
                : (window.campusImages ?? window.campusimages ?? campusImages);

            const seen = new Set();
            return data.filter(item => {
                if (!item || !item.src || seen.has(item.src)) return false;
                seen.add(item.src);
                return true;
            });
        }

        function getSchoolDurationYears() {
            return new Date().getFullYear() - SCHOOL_FOUNDED_YEAR;
        }

        function initSchoolDuration() {
            const years = getSchoolDurationYears();
            const durationText = `始建于${SCHOOL_FOUNDED_YEAR}年 · ${years}年办学历史`;

            const heroDuration = document.getElementById('school-duration');
            if (heroDuration) heroDuration.textContent = durationText;

            const aboutYears = document.getElementById('about-duration-years');
            if (aboutYears) aboutYears.textContent = years;

            const footerDuration = document.getElementById('footer-school-duration');
            if (footerDuration) footerDuration.textContent = durationText;

            const yearsCounter = document.querySelector('.count-up[data-stat="school-years"]');
            if (yearsCounter) yearsCounter.setAttribute('data-target', String(years));
        }

        function escapeHtml(value) {
            return String(value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        // 渲染通知公告
        function renderNotices(data = getNoticeData()) {
            const container = document.getElementById('notice-list');
            if (!container) return;

            if (!data.length) {
                container.innerHTML = `
                    <div class="text-center py-12 text-slate-400">
                        <i data-lucide="inbox" class="w-10 h-10 mx-auto mb-3 opacity-50"></i>
                        <p class="text-sm">暂无最新通知</p>
                    </div>
                `;
                lucide.createIcons();
                return;
            }

            container.innerHTML = data.map(item => `
                <div class="group flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                    <div class="flex-shrink-0 w-14 h-14 ${item.tag ? 'bg-school-red' : 'bg-school-dark'} text-white rounded-lg flex flex-col items-center justify-center">
                        <span class="text-xs font-bold">${escapeHtml(item.month)}月</span>
                        <span class="text-lg font-bold leading-none">${escapeHtml(item.day)}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            ${item.tag ? `<span class="px-2 py-0.5 bg-school-red text-white text-[10px] rounded">${escapeHtml(item.tag)}</span>` : ''}
                            <h4 class="font-bold text-slate-800 text-sm truncate group-hover:text-school-dark transition-colors">${escapeHtml(item.title)}</h4>
                        </div>
                        <p class="text-xs text-slate-500 line-clamp-2">${escapeHtml(item.desc)}</p>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // 渲染校园新闻
        function renderNews(data = getNewsData()) {
            const container = document.getElementById('news-list');
            if (!container) return;

            if (!data.length) {
                container.innerHTML = `
                    <div class="text-center py-12 text-slate-400">
                        <i data-lucide="newspaper" class="w-10 h-10 mx-auto mb-3 opacity-50"></i>
                        <p class="text-sm">暂无校园新闻</p>
                    </div>
                `;
                lucide.createIcons();
                return;
            }

            container.innerHTML = data.map(item => {
                if (item.type === 'featured') {
                    const imgHtml = item.image
                        ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">`
                        : `<div class="img-placeholder w-full h-full">[请替换]<br>${escapeHtml(item.title)}</div>`;
                    return `
                        <a href="#" class="group block rounded-2xl overflow-hidden border border-slate-100 hover:border-school-dark/20 transition-all card-hover" title="即将上线">
                            <div class="relative h-48 overflow-hidden">
                                ${imgHtml}
                                <div class="absolute top-4 left-4 px-3 py-1 bg-school-dark text-white text-xs rounded-full">${escapeHtml(item.tag)}</div>
                            </div>
                            <div class="p-5">
                                <div class="flex items-center gap-2 text-xs text-slate-500 mb-2">
                                    <i data-lucide="calendar" class="w-3 h-3"></i>
                                    ${escapeHtml(item.date)}
                                </div>
                                <h4 class="font-bold text-slate-900 mb-2 group-hover:text-school-dark transition-colors">${escapeHtml(item.title)}</h4>
                                <p class="text-sm text-slate-600 line-clamp-2">${escapeHtml(item.desc)}</p>
                            </div>
                        </a>
                    `;
                }

                const imgHtml = item.image
                    ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">`
                    : `<div class="img-placeholder w-full h-full text-xs">[请替换]</div>`;
                return `
                    <a href="#" class="group flex gap-4 items-start" title="即将上线">
                        <div class="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            ${imgHtml}
                        </div>
                        <div>
                            <div class="flex items-center gap-2 text-xs text-slate-500 mb-1">
                                <i data-lucide="calendar" class="w-3 h-3"></i>
                                ${escapeHtml(item.date)}
                            </div>
                            <h4 class="font-bold text-slate-800 text-sm group-hover:text-school-dark transition-colors line-clamp-2">${escapeHtml(item.title)}</h4>
                        </div>
                    </a>
                `;
            }).join('');
            lucide.createIcons();
        }

        function getRandomItems(items, count) {
            const shuffled = [...items];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled.slice(0, Math.min(count, shuffled.length));
        }

        let displayedCampusImages = [];

        // 渲染校园风光
        function renderCampus() {
            const container = document.getElementById('campus-grid');
            if (!container) return;

            displayedCampusImages = getRandomItems(getCampusImageData(), 8);
            if (!displayedCampusImages.length) return;

            container.innerHTML = displayedCampusImages.map((img, index) => {
                return `<div class="group relative rounded-2xl overflow-hidden h-48 md:h-64 cursor-pointer animate-fade-up" style="transition-delay: ${(index % 4) * 50}ms" onclick="openLightbox(${index})">
                    <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p class="text-white font-bold text-sm">${escapeHtml(img.caption)}</p>
                    </div>
                </div>`;
            }).join('');

            container.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));
        }

        initSchoolDuration();
        renderNotices();
        renderNews();

        // 加载动画（loader 可能被注释掉，需做空值检查）
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            if (!loader) return;

            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        });

        // 初始化 Swiper
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });

        const countTimers = new WeakMap();

        function animateCount(el, target) {
            if (el.dataset.animated === 'true') return;
            el.dataset.animated = 'true';

            const existingTimer = countTimers.get(el);
            if (existingTimer) clearInterval(existingTimer);

            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(timer);
                    countTimers.delete(el);
                } else {
                    el.textContent = Math.floor(current);
                }
            }, 30);
            countTimers.set(el, timer);
        }

        // 滚动动画
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('visible');
                observer.unobserve(entry.target);

                entry.target.querySelectorAll('.count-up').forEach(el => {
                    const target = parseInt(el.getAttribute('data-target'), 10);
                    if (!Number.isNaN(target)) {
                        animateCount(el, target);
                    }
                });
            });
        }, observerOptions);

        document.querySelectorAll('.animate-fade-up').forEach(el => {
            observer.observe(el);
        });

        renderCampus();

        // 导航栏滚动效果
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const backToTop = document.getElementById('back-to-top');
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('shadow-md');
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                header.classList.remove('shadow-md');
                backToTop.classList.add('opacity-0', 'invisible');
                backToTop.classList.remove('opacity-100', 'visible');
            }
        });

        // 返回顶部
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const SEARCH_TARGETS = [
            { id: 'about', keywords: ['学校概况', '学校', '概况', '办学', '和雅'] },
            { id: 'news', keywords: ['新闻', '通知', '公告'] },
            { id: 'education', keywords: ['教育', '教学', '课程', '师资'] },
            { id: 'admission', keywords: ['招生', '招聘', '报名'] },
            { id: 'calendar', keywords: ['校历', '学期', '放假'] },
            { id: 'campus', keywords: ['校园', '风光'] },
            { id: 'contact', keywords: ['联系', '地址', '电话'] },
        ];

        function matchesQuery(text, query) {
            return text.toLowerCase().includes(query);
        }

        function performSearch(query) {
            const trimmed = query.trim();
            if (!trimmed) {
                renderNotices();
                renderNews();
                return;
            }

            const normalized = trimmed.toLowerCase();

            const filteredNotices = getNoticeData().filter(item =>
                matchesQuery(`${item.title} ${item.desc}`, normalized)
            );
            const filteredNews = getNewsData().filter(item =>
                matchesQuery(`${item.title} ${item.desc || ''}`, normalized)
            );

            renderNotices(filteredNotices);
            renderNews(filteredNews);

            const sectionMatch = SEARCH_TARGETS.find(target =>
                target.keywords.some(keyword => keyword.includes(trimmed) || trimmed.includes(keyword.toLowerCase()))
            );

            if (sectionMatch) {
                document.getElementById(sectionMatch.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }

            if (filteredNotices.length || filteredNews.length) {
                document.getElementById('news')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // 搜索切换
        function toggleSearch() {
            const searchBar = document.getElementById('search-bar');
            searchBar.classList.toggle('hidden');
            if (!searchBar.classList.contains('hidden')) {
                const input = searchBar.querySelector('input');
                input.focus();
                input.select();
            } else {
                const input = searchBar.querySelector('input');
                input.value = '';
                performSearch('');
            }
        }

        const searchInput = document.querySelector('#search-bar input');
        if (searchInput) {
            searchInput.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    performSearch(searchInput.value);
                }
                if (event.key === 'Escape') {
                    searchInput.value = '';
                    performSearch('');
                    toggleSearch();
                }
            });
        }

        // 移动端菜单
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // 标签切换
        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.add('hidden');
            });

            document.getElementById('content-' + tabName).classList.remove('hidden');

            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-school-dark', 'text-white');
                btn.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100', 'border', 'border-slate-200');
            });

            const activeBtn = document.getElementById('tab-' + tabName);
            activeBtn.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100', 'border', 'border-slate-200');
            activeBtn.classList.add('bg-school-dark', 'text-white');
        }

        // Lightbox
        let currentImage = 0;

        function openLightbox(index) {
            currentImage = index;
            updateLightbox();
            document.getElementById('lightbox').classList.remove('hidden');
            document.getElementById('lightbox').classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.add('hidden');
            document.getElementById('lightbox').classList.remove('flex');
            document.body.style.overflow = '';
        }

        function updateLightbox() {
            const img = displayedCampusImages[currentImage];
            if (!img) return;
            document.getElementById('lightbox-img').src = img.src;
            document.getElementById('lightbox-caption').textContent = img.caption;
        }

        function nextImage() {
            if (!displayedCampusImages.length) return;
            currentImage = (currentImage + 1) % displayedCampusImages.length;
            updateLightbox();
        }

        function prevImage() {
            if (!displayedCampusImages.length) return;
            currentImage = (currentImage - 1 + displayedCampusImages.length) % displayedCampusImages.length;
            updateLightbox();
        }

        document.addEventListener('keydown', (e) => {
            if (document.getElementById('lightbox').classList.contains('hidden')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        });

        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target === document.getElementById('lightbox')) {
                closeLightbox();
            }
        });
