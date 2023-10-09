function generateLoadingBar(percentage) {
    const percent = percentage;
  
    if (percentage === 100) {
      console.log("100% Complete!\n[%%%%%%%%%%]");
    } else {
      const barsToFill = percentage / 10;
      const barsToEmpty = 10 - barsToFill;
  
      const loadingBar = "%".repeat(barsToFill) + ".".repeat(barsToEmpty);
  
      console.log(`${percent}% [${loadingBar}]`);
      console.log('Still loading...');
    }
  }
  
  generateLoadingBar(30);
  generateLoadingBar(50);
  generateLoadingBar(100);