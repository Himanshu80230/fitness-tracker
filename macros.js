document.getElementById('macronutrients-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    const protein = parseFloat(document.getElementById('protein').value) || 0;
    const carbs = parseFloat(document.getElementById('carbs').value) || 0;
    const fats = parseFloat(document.getElementById('fats').value) || 0;
  
    // Calculate total grams
    const totalGrams = protein + carbs + fats;
  
    // Calculate total calories (Protein: 4 cal/g, Carbs: 4 cal/g, Fats: 9 cal/g)
    const proteinCalories = protein * 4;
    const carbsCalories = carbs * 4;
    const fatsCalories = fats * 9;
    const totalCalories = proteinCalories + carbsCalories + fatsCalories;
  
    // Display results
    document.getElementById('totalGrams').textContent = totalGrams.toFixed(2);
    document.getElementById('totalCalories').textContent = totalCalories.toFixed(2);
  });