const nutritionalData = {
    "Brown Stew Chicken": {
        "Calories": "400 kcal",
        "Protein": "12g",
        "Fat": "20g",
        "Carbohydrates": "40g",
        "Fiber": "2g"
    },
    "Chicken & mushroom Hotpot": {
        "Calories": "350 kcal",
        "Protein": "25g",
        "Fat": "15g",
        "Carbohydrates": "30g",
        "Fiber": "3g"
    },
    "Bubble & Squeak": {
        "Calories": "450 kcal",
        "Protein": "18g",
        "Fat": "10g",
        "Carbohydrates": "60g",
        "Fiber": "5g"
    },
    "Apam balik": {
        "Calories": "300 kcal",
        "Protein": "22g",
        "Fat": "15g",
        "Carbohydrates": "5g",
        "Fiber": "1g"
    },
    "Apple & Blackberry Crumble": {
        "Calories": "250 kcal",
        "Protein": "10g",
        "Fat": "8g",
        "Carbohydrates": "35g",
        "Fiber": "6g"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mealName = urlParams.get('meal');

    if (mealName) {
        document.getElementById('meal-name').textContent = mealName;
        const nutritionInfo = nutritionalData[mealName];

        if (nutritionInfo) {
            let html = `
                <p>Calories: ${nutritionInfo.Calories}</p>
                <p>Protein: ${nutritionInfo.Protein}</p>
                <p>Fat: ${nutritionInfo.Fat}</p>
                <p>Carbohydrates: ${nutritionInfo.Carbohydrates}</p>
                <p>Fiber: ${nutritionInfo.Fiber}</p>
            `;
            document.getElementById('nutrition-info').innerHTML = html;

            // Generate chart based on available data
            if (Object.keys(nutritionInfo).length > 0) {
                generateChart(nutritionInfo);
            } else {
                document.getElementById('nutrition-info').innerHTML += '<p>No nutritional information available.</p>';
            }
        } else {
            document.getElementById('nutrition-info').innerHTML = '<p>Nutritional information is not available for this meal.</p>';
        }
    } else {
        document.getElementById('nutrition-info').innerHTML = '<p>No meal selected.</p>';
    }
});

function generateChart(nutritionInfo) {
    let ctx = document.getElementById('nutrition-chart').getContext('2d');
    let nutritionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(nutritionInfo),
            datasets: [{
                label: 'Nutritional Information',
                data: Object.values(nutritionInfo),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
