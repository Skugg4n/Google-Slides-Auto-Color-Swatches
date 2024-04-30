// Define the dimensions of the swatch and the distance between swatches
const SWATCH_SIZE = 50;
const SWATCH_SPACING = 0;

// Define the position where the first swatch will be placed
const START_POS_X = 10; // Distance from the left of the slide
const START_POS_Y = 10; // Distance from the top of the slide

const TEXTBOX_MARGIN = -5; // Pixels of space between swatch and text box


function addColorSwatch(slide, color, name, posX, posY) {
  try {  
    // Create the swatch and set its color
    let swatch = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, posX, posY, SWATCH_SIZE, SWATCH_SIZE);
    swatch.getFill().setSolidFill(color);

    // Make the border transparent
    swatch.getBorder().setTransparent(); 

    // Create and format the text box
let textBox = slide.insertTextBox(name, posX, posY + SWATCH_SIZE + TEXTBOX_MARGIN, SWATCH_SIZE, 20);
let textStyle = textBox.getText().getTextStyle();
    textStyle.setFontSize(6); // Set desired font size
    textStyle.setBold(false);
    textStyle.setFontFamily('Helvetica Neue'); // Set desired font family
    textStyle.setForegroundColor('#FFFFFF'); // use any hex color


// Correcting text alignment method
textBox.getText().getParagraphStyle().setAlignment(SlidesApp.ParagraphAlignment.CENTER);

    textStyle.setFontSize(10).setBold(true);
    textStyle.setTextAlignment(SlidesApp.TextAlignment.CENTER);
  } catch (error) {
    Logger.log('Error adding swatch for color ' + color + ': ' + error);
  }
}

function main() {
  const colors = [
    { hex: '#191414', name: 'Black' },
    { hex: '#FFFFFF', name: 'White' },
    { hex: '#503750', name: 'Violet Desat 46'},
    { hex: '#8c1932', name: 'Red Desat 55' }, 
    { hex: '#7d4b32', name: 'Brown 75' },
    { hex: '#006450', name: 'Green Blue 75' },
    { hex: '#1e3264', name: 'Blue Violet Desat 35' },
    { hex: '#af2896', name: 'Violet Pink 84' },
    { hex: '#eb1e32', name: 'Red 100' },
    { hex: '#f59b23', name: 'Brown Yellow 155' },
    { hex: '#4b917d', name: 'Green Blue Desat 114' },
    { hex: '#2d46b9', name: 'Blue Violet Desat 55' },
    { hex: '#f037a5', name: 'Pink 115' },
    { hex: '#ff4632', name: 'Red Orange 120' },
    { hex: '#5ff550', name: 'Fl. Green 176' },
    { hex: '#4100f5', name: 'Blue Violet 61' },
    { hex: '#19e68c', name: 'Fl. Cyan 167' },
    { hex: '#f573a0', name: 'Pink Desat 135' },
    { hex: '#509bf5', name: 'Blue 135' },
    { hex: '#b49bc8', name: 'Violet Desat 135' },
    { hex: '#ff6437', name: 'Red Orange 120' },
    { hex: '#c87d55', name: 'Brown 123' },
    { hex: '#fae62d', name: 'Yellow 184' },
    { hex: '#cdf564', name: 'Yellow Green 186' },
    { hex: '#9bf0e1', name: 'Green Blue 180' },
    { hex: '#ffcdd2', name: 'Red 180' },
    { hex: '#c39687', name: 'Brown Desat 135' },
    { hex: '#ffc864', name: 'Brown Yellow 172' },
    { hex: '#c3f0c8', name: 'Green Desat 185' },
    { hex: '#a0c3d2', name: 'Blue Desat 155' },
    // ... Add more colors here
  ];

  const presentation = SlidesApp.getActivePresentation();
  const slide = presentation.getSlides()[0];
  const slideHeight = presentation.getPageHeight();

  const maxSwatchesPerRow = 6; // Adjust as needed
  let posX = START_POS_X;
  let posY = START_POS_Y;

  for (let i = 0; i < colors.length; i++) {
    if (i > 0 && i % maxSwatchesPerRow === 0) {
      posX = START_POS_X;
      posY += SWATCH_SIZE + SWATCH_SPACING + 20; //set distance between boxes
    }

    // Bounds checking 
    if (posY > slideHeight - SWATCH_SIZE) { 
      Logger.log('Not enough space for all swatches!');
      break;
    }

    addColorSwatch(slide, colors[i].hex, colors[i].name, posX, posY);
    posX += SWATCH_SIZE + SWATCH_SPACING;
  }
}

main(); 

