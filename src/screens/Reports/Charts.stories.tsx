import { Meta, StoryObj } from "@storybook/react";
import {
  BarsScreen,
  BarsHorizontalScreen,
  ChartGeometricScreen,
  ChartWaveScreen,
  DoubleBarsScreen,
  MiscScreen,
  PolarChartScreen,
} from "./ChartContainer";

// ─── Bars ─────────────────────────────────────────────────────────────────────

const barsMeta: Meta<typeof BarsScreen> = {
  component: BarsScreen,
  title: "Screens/Reports/Bars",
  parameters: { layout: "fullscreen" },
};

export default barsMeta;
type BarsStory = StoryObj<typeof BarsScreen>;

export const Bars: BarsStory = {};

// ─── Bars Horizontal ──────────────────────────────────────────────────────────

export const BarsHorizontal: StoryObj<typeof BarsHorizontalScreen> = {
  render: () => <BarsHorizontalScreen />,
};
BarsHorizontal.parameters = { layout: "fullscreen" };

// ─── Chart Geometric ──────────────────────────────────────────────────────────

export const ChartGeometric: StoryObj<typeof ChartGeometricScreen> = {
  render: () => <ChartGeometricScreen />,
};
ChartGeometric.parameters = { layout: "fullscreen" };

// ─── Chart Wave ───────────────────────────────────────────────────────────────

export const ChartWave: StoryObj<typeof ChartWaveScreen> = {
  render: () => <ChartWaveScreen />,
};
ChartWave.parameters = { layout: "fullscreen" };

// ─── Double Bars ──────────────────────────────────────────────────────────────

export const DoubleBars: StoryObj<typeof DoubleBarsScreen> = {
  render: () => <DoubleBarsScreen />,
};
DoubleBars.parameters = { layout: "fullscreen" };

// ─── Misc ─────────────────────────────────────────────────────────────────────

export const Misc: StoryObj<typeof MiscScreen> = {
  render: () => <MiscScreen />,
};
Misc.parameters = { layout: "fullscreen" };

// ─── Polar Chart ──────────────────────────────────────────────────────────────

export const PolarChart: StoryObj<typeof PolarChartScreen> = {
  render: () => <PolarChartScreen />,
};
PolarChart.parameters = { layout: "fullscreen" };
