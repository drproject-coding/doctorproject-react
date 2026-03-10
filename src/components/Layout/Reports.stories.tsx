import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  BarsScreen,
  BarsHorizontalScreen,
  ChartWaveScreen,
  ChartGeometricScreen,
  DoubleBarsScreen,
  MiscScreen,
  PolarChartScreen,
} from "../../screens/Reports/ChartContainer";

const meta: Meta = {
  title: "Pages/Reports",
  parameters: { layout: "fullscreen" },
};
export default meta;

export const ReportsBars: StoryObj = {
  render: () => <BarsScreen />,
};

export const ReportsBarsHorizontal: StoryObj = {
  render: () => <BarsHorizontalScreen />,
};

export const ReportsWave: StoryObj = {
  render: () => <ChartWaveScreen />,
};

export const ReportsDoubleBars: StoryObj = {
  render: () => <DoubleBarsScreen />,
};

export const ReportsGeometric: StoryObj = {
  render: () => <ChartGeometricScreen />,
};

export const ReportsPolar: StoryObj = {
  render: () => <PolarChartScreen />,
};

export const ReportsMisc: StoryObj = {
  render: () => <MiscScreen />,
};
