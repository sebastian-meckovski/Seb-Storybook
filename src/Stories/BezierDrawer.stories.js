import React, { useState } from 'react';
import { BezierDrawer } from '../Components/BezierDrawer/BezierDrawer';

export default {
	title: 'BezierDrawerTest',
	component: BezierDrawer,
};

export const BezierDrawerExample = () => {
	const [coords, setCoords] = useState();

	const onCoordUpdate = (e) => {
		setCoords(e);
	};

	return <BezierDrawer onCoordUpdate={onCoordUpdate} />;
};
