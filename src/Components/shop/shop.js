import React from 'react';
import Title from './Title';
import Sidepanel from './sidepanel';
import Rightpanel from './rightpanel';

export default function Shop() {
  return (
    <>
      <Title />
      <section class="md">
            <div class="container">
                <div class="row">
                    <Sidepanel/>
                   <Rightpanel/>
                </div>
            </div>
        </section>
    </>
  );
}
