document.addEventListener('DOMContentLoaded',()=>{
    const btn=document.querySelector('#btn')
    // const calculatedAge=document.querySelector('.form form h3')
    const years=document.querySelectorAll('.number');
    const days=document.getElementById('one')


    btn.addEventListener('click', () => {
        event.preventDefault()
        const date = document.querySelector('#dateInput').value;
        ageCalculation(date);
    });

    function ageCalculation(date) {
        let URL='https://digidates.de/api/v1/age/';
        const dateString = String(date);
        fetch(URL+`${dateString}`)
        .then(response => response.json())
        .then(data => {
            days.classList.remove('.wow')

            years.forEach(year => year.classList.remove('active'));
                years[0].textContent = `${data.ageextended.years}`;
                years[1].textContent = `${data.ageextended.months}`;
                years[2].textContent = `${data.ageextended.days}`;
                years.forEach(year => {
                    year.classList.add('active');
                    console.log(year);
                });
                days.classList.add('.wow')
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }


    function currentDate() {
        let currentDate = new Date();
        
        let months = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        let daysOfWeek = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        
        let currentMonth = months[currentDate.getMonth()];
        let currentYear = currentDate.getFullYear();
        let currentDay = currentDate.getDate();
        let currentWeek = daysOfWeek[currentDate.getDay()];
        
        const currentMonthElement = document.querySelector('.div1 #month');
        const currentYearElement = document.querySelector('.div1 #year');
        const currentDayElement = document.querySelector('.div2 #date');
        const currentWeekElement = document.querySelector('.div2 #week');
        
        currentMonthElement.textContent = currentMonth;
        currentYearElement.textContent = currentYear;
        currentDayElement.textContent = currentDay;
        currentWeekElement.textContent = currentWeek;
    }
    
    currentDate();
    

})