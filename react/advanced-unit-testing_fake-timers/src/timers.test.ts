import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { debounce, getGreeting, startCountdown } from "./timers";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("getGreeting", () => {
  test("greets with 'Good morning' at 9:00", () => {
    vi.setSystemTime(new Date(2026, 0, 1, 9, 0));

    expect(getGreeting()).toBe("Good morning");
  });

  test("switches to 'Good afternoon' at exactly 12:00", () => {
    // TODO: check 11:59 and 12:00 (a test.each with a table works well here)
  });

  test("switches to 'Good evening' at exactly 18:00", () => {
    // TODO: check 17:59 and 18:00
  });

  test.each([
    { hour: 11, minute: 59, expected: "Good morning" },
    { hour: 12, minute: 0, expected: "Good afternoon" },
    { hour: 17, minute: 59, expected: "Good afternoon" },
    { hour: 18, minute: 0, expected: "Good evening" },
  ])(
    "greets with '$expected' at $hour:$minute",
    ({ hour, minute, expected }) => {
      vi.setSystemTime(new Date(2026, 0, 1, hour, minute));
      expect(getGreeting()).toBe(expected);
    },
  );
});

describe("debounce", () => {
  test("does not call the callback immediately", () => {
    const callback = vi.fn();
    const debounced = debounce(callback, 500);

    debounced();

    expect(callback).not.toHaveBeenCalled();
  });

  test("calls the callback once after the delay", () => {
    // TODO: use vi.advanceTimersByTime(500)
    const callback = vi.fn();
    const debounced = debounce(callback, 500);

    debounced();
    vi.advanceTimersByTime(500);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("calls the callback only once for several quick calls", () => {
    // TODO: call debounced() three times in a row
    const callback = vi.fn();
    const debounced = debounce(callback, 500);

    debounced();
    debounced();
    debounced();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("restarts the delay with every call", () => {
    // TODO: call, advance 400 ms, call again, advance 400 ms -> not called yet
    const callback = vi.fn();
    const debounced = debounce(callback, 500);

    debounced();
    vi.advanceTimersByTime(400);
    debounced();
    vi.advanceTimersByTime(400);
    expect(callback).not.toHaveBeenCalled();
  });
});

describe("startCountdown", () => {
  test("calls onTick every second with the remaining seconds", () => {
    // TODO: for a countdown of 3 seconds onTick receives 2, 1 and 0
    const onTick = vi.fn();
    startCountdown(3, onTick, vi.fn());

    vi.advanceTimersByTime(3000);

    expect(onTick.mock.calls).toEqual([[2], [1], [0]]);
  });

  test("does not call onDone before the countdown is over", () => {
    // TODO
  });

  test("calls onDone when the countdown reaches 0", () => {
    // TODO
  });

  test("stops ticking after the returned cancel function was called", () => {
    // TODO
  });

  test("calls onDone right away for a countdown of 0 seconds", () => {
    // TODO: what happens in the current implementation? Is that what you expect?
  });
});
