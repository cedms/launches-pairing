import { render, screen } from '@testing-library/react';
import LaunchMessage from './LaunchMessage';

const RANDOM_FAILURE_REASON = 'random failure reason';

describe('LaunchMessage component', () => { 
 
  it('shows the SUCCEEDED label if the launch was succesful', () => {
    render(<LaunchMessage success />);
    const element = screen.getByTestId('launch-message');
    expect(element).toHaveTextContent('Launch succeeded')
  })

  it('shows the FAILURE label if the launch has failed', () => {
    render(<LaunchMessage success={false} />);
    const element = screen.getByTestId('launch-message');
    expect(element).toHaveTextContent('Launch failed')
  })

  it('shows the FAILURE reason if the launch has failed and a reason was passed', () => {
    render(<LaunchMessage success={false} failureReason={RANDOM_FAILURE_REASON} />);
    const element = screen.getByTestId('launch-message');
    expect(element).toHaveTextContent(RANDOM_FAILURE_REASON)    
  })

  it(`doesn't show the FAILURE reason if the launch was successful, even if a failure reason is passed`, () => {
    render(<LaunchMessage success failureReason={RANDOM_FAILURE_REASON} />);
    const element = screen.getByTestId('launch-message');
    expect(element).not.toHaveTextContent(RANDOM_FAILURE_REASON)    
  })

})