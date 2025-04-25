document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    // Initialize accordion state
    accordionButtons.forEach(button => {
      const targetId = button.getAttribute('aria-controls');
      const section = document.getElementById(targetId);
      
      // Set initial state
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      section.style.display = isExpanded ? 'block' : 'none';
    });
  
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('aria-controls');
        const section = document.getElementById(targetId);
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
        // Update button state
        this.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle section
        section.style.display = isExpanded ? 'none' : 'block';
        
        // Optional: Close other sections (for single-open accordion)
        if (!isExpanded) {
          document.querySelectorAll('.accordion-section').forEach(s => {
            if (s.id !== targetId) {
              s.style.display = 'none';
              const btn = document.querySelector(`[aria-controls="${s.id}"]`);
              if (btn) btn.setAttribute('aria-expanded', 'false');
            }
          });
        }
  
        console.log(`${isExpanded ? 'Closed' : 'Opened'}: ${targetId}`);
      });
    });
  });