/**
 * FASTER FUTURE SPORTS — Resources page interactions
 * Download modal + category filtering
 */

// ===================================
// DOWNLOAD MODAL
// ===================================
function openDownloadModal(resourceId) {
    const modal = document.getElementById('downloadModal');
    if (!modal) return;
    const field = document.getElementById('resourceId');
    if (field) field.value = resourceId || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close when clicking the backdrop or pressing Escape
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('downloadModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeDownloadModal();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDownloadModal();
    });

    // ===================================
    // RESOURCE FILTERING
    // ===================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.resource-card');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            cards.forEach(function (card) {
                const show = filter === 'all' || card.dataset.category === filter;
                card.style.display = show ? 'flex' : 'none';
            });
        });
    });
});
