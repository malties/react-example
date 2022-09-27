/**
 * @jest-environment jsdom
 */
import { render, expect } from '@testing-library/react';
import React from 'react';
import Counter from './Counter';

it('increments the count when increment button is clicked', () => {
    render(<Counter/>);
    const testCounter = screen.getByText(/increment/);
    expect(testCounter).toBeDefined();

})