import { FunctionComponent } from 'react';

import { LngRouteProps } from '@/types/page';

interface HomePageProps extends LngRouteProps {}

const HomePage: FunctionComponent<HomePageProps> = ({ params: { lng: _ } }) => (
  <div>HomePage</div>
);

export default HomePage;
