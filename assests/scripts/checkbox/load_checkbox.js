    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => 
        {
            const savedState = localStorage.getItem(checkbox.id);
            if (savedState !== null) 
                {
                    checkbox.checked = savedState === 'true';
                }
        }
    );
