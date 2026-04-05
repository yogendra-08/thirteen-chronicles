import { useEffect } from 'react';

interface NavigationSection {
  id: string;
  name: string;
}

const useKeyboardNavigation = (sections: NavigationSection[]) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle navigation keys when not typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      let targetSection: NavigationSection | null = null;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          if (currentSection) {
            const currentIndex = sections.findIndex(s => s.id === currentSection.id);
            if (currentIndex < sections.length - 1) {
              targetSection = sections[currentIndex + 1];
            }
          } else {
            targetSection = sections[0];
          }
          break;

        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentSection) {
            const currentIndex = sections.findIndex(s => s.id === currentSection.id);
            if (currentIndex > 0) {
              targetSection = sections[currentIndex - 1];
            }
          } else {
            targetSection = sections[0];
          }
          break;

        case 'Home':
          e.preventDefault();
          targetSection = sections[0];
          break;

        case 'End':
          e.preventDefault();
          targetSection = sections[sections.length - 1];
          break;

        case '?':
        case '/':
          e.preventDefault();
          showHelpModal();
          break;
      }

      if (targetSection) {
        const element = document.getElementById(targetSection.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const showHelpModal = () => {
      // Create and show help modal
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4';
      modal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full">
          <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">Keyboard Navigation</h3>
          <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div><kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">↓</kbd> or <kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">PageDown</kbd> - Next section</div>
            <div><kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">↑</kbd> or <kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">PageUp</kbd> - Previous section</div>
            <div><kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Home</kbd> - Go to top</div>
            <div><kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">End</kbd> - Go to bottom</div>
            <div><kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">?</kbd> or <kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">/</kbd> - Show help</div>
            <div><kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Esc</kbd> - Close modals</div>
          </div>
          <button class="mt-6 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Got it!
          </button>
        </div>
      `;

      const closeHelp = () => {
        document.body.removeChild(modal);
      };

      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.tagName === 'BUTTON') {
          closeHelp();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeHelp();
        }
      }, { once: true });

      document.body.appendChild(modal);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sections]);
};

export default useKeyboardNavigation;
