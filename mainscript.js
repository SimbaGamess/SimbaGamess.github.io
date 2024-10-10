document.querySelectorAll('a').forEach(link => {
    if (link.href.startsWith('http')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});
