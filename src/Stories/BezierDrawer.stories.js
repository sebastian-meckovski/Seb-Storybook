import React from 'react';
import { BezierDrawer } from '../Components/BezierDrawer/BezierDrawer';

export default {
	title: 'BezierDrawerTest',
	component: BezierDrawer,
};

export const BezierDrawerExample = () => {
	return <BezierDrawer onCoordUpdate={(x) => console.table(x)} />;
};
