import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Grid from '../components/Grid';

describe('Grid Component', () => {
  // Mocked prompts for testing
  const mockedPrompts = [
    'Prompt 1',
    'Prompt 2',
    'Prompt 3',
    'Prompt 4',
    'Prompt 5',
    // Add more prompts as needed
  ];

  it('renders the Grid component', () => {
    const { container } = render(<Grid rows={5} columns={5} />);
    const gridElement = container.querySelector('.grid-container');
    expect(gridElement).toBeInTheDocument();
  });

   it('initially all cells should be unselected', () => {
    const { getAllByTestId } = render(<Grid rows={5} columns={5} />);
    const cellElements = getAllByTestId('grid-cell');
    expect(cellElements).toHaveLength(25);

    cellElements.forEach((cell) => {
      expect(cell).not.toHaveClass('selected');
    });
  });

  it('25 Cells should be rendered', () => {
    const { getAllByTestId } = render(<Grid rows={5} columns={5} />);
    const cellElements = getAllByTestId('grid-cell'); // Assuming you have test ids like "grid-cell-0", "grid-cell-1", etc.

    expect(cellElements.length).toBe(25);
  })

  it('clicking a cell should toggle the selection', () => {
    const { getAllByTestId } = render(<Grid rows={5} columns={5} />);
    const cellElements = getAllByTestId('grid-cell'); // Assuming you have test ids like "grid-cell-0", "grid-cell-1", etc.

    expect(cellElements.length).toBe(25);

    const cellElement = cellElements[0]

    // Verify that the cell is initially not selected
    expect(cellElement).not.toHaveClass('selected');
    
    // Click the cell
    fireEvent.click(cellElement);
    
    // Verify that the cell is now selected
    expect(cellElement).toHaveClass('selected');
    
    // Click the cell again
    fireEvent.click(cellElement);
    
    // Verify that the cell is unselected after the second click
    expect(cellElement).not.toHaveClass('selected');
  });

});
