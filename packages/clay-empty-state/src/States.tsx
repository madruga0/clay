/**
 * SPDX-FileCopyrightText: © 2024 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

type Props = {
	state?: 'empty' | 'success' | 'search';
};

export function States({state}: Props) {
	switch (state) {
		case 'empty':
			return (
				<svg className="empty-state-animation" viewBox="0 0 250 250">
					<defs>
						<clipPath id="a">
							<path
								className="a"
								d="M217.01 71.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="c">
							<path
								className="a"
								d="M169.01 34.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="e">
							<path
								className="a"
								d="M53.01 47.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="g">
							<path
								className="a"
								d="M207.01 126.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="i">
							<path
								className="a"
								d="M54.01 170.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="k">
							<path
								className="a"
								d="M13.01 140.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="m">
							<path
								className="a"
								d="M36.01 96.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="o">
							<path
								className="a"
								d="M192.01 182.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="q">
							<path
								className="a"
								d="M155.01 111.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="s">
							<path
								className="a"
								d="M107.07 26.04h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="t">
							<path
								className="a"
								d="M107.07 26.04h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="u">
							<path
								className="a"
								d="M95.01 80.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="w">
							<path
								className="a"
								d="M163.01 223.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="y">
							<path
								className="a"
								d="M83.01 218.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="aa">
							<path className="a" d="M207 52h3.99v3.99H207z" />
						</clipPath>
						<clipPath id="ac">
							<path className="a" d="M217 112h3.99v3.99H217z" />
						</clipPath>
						<clipPath id="ae">
							<path className="a" d="M217 172h3.99v3.99H217z" />
						</clipPath>
						<clipPath id="ag">
							<path className="a" d="M187 212h3.99v3.99H187z" />
						</clipPath>
						<clipPath id="ai">
							<path className="a" d="M117 232h3.99v3.99H117z" />
						</clipPath>
						<clipPath id="ak">
							<path className="a" d="M57 202h3.99v3.99H57z" />
						</clipPath>
						<clipPath id="am">
							<path className="a" d="M17 162h3.99v3.99H17z" />
						</clipPath>
						<clipPath id="ao">
							<path className="a" d="M27 82h3.99v3.99H27z" />
						</clipPath>
						<clipPath id="aq">
							<path className="a" d="M67 52h3.99v3.99H67z" />
						</clipPath>
						<clipPath id="as">
							<path className="a" d="M107 12h3.99v3.99H107z" />
						</clipPath>
						<clipPath id="au">
							<path className="a" d="M157 52h3.99v3.99H157z" />
						</clipPath>
						<clipPath id="aw">
							<path className="a" d="M117 102h3.99v3.99H117z" />
						</clipPath>
					</defs>
					<circle cx="125" cy="125" fill="#e6e6eb" r="125" />
					<g className="c">
						<g className="c">
							<path
								className="d"
								d="M220.79 79.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="e">
						<g className="e">
							<path
								className="d"
								d="M172.79 42.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="f">
						<g className="f">
							<path
								className="d"
								d="M56.79 55.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="g">
						<g className="g">
							<path
								className="d"
								d="M210.79 134.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="h">
						<g className="h">
							<path
								className="d"
								d="M57.79 178.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="i">
						<g className="i">
							<path
								className="d"
								d="M16.79 148.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="j">
						<g className="j">
							<path
								className="d"
								d="M39.79 104.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="k">
						<g className="k">
							<path
								className="d"
								d="M195.79 190.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="l">
						<g className="l">
							<path
								className="d"
								d="M158.79 119.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g clipPath="url(#s)">
						<g clipPath="url(#t)">
							<path
								className="d"
								d="M110.86 33.9l-.58-2.27a1 1 0 0 0-.76-.75l-2.27-.58a.24.24 0 0 1 0-.47l2.27-.58a1.06 1.06 0 0 0 .76-.76l.58-2.27a.24.24 0 0 1 .47 0l.58 2.27a1 1 0 0 0 .76.76l2.27.58a.24.24 0 0 1 0 .47l-2.27.58a1 1 0 0 0-.76.75l-.58 2.27a.24.24 0 0 1-.47 0"
							/>
						</g>
					</g>
					<g className="o">
						<g className="o">
							<path
								className="d"
								d="M98.79 88.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="p">
						<g className="p">
							<path
								className="d"
								d="M166.79 231.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="q">
						<g className="q">
							<path
								className="d"
								d="M86.79 226.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="r">
						<g className="s">
							<g className="s">
								<path
									className="d"
									d="M208.88 55.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="t">
							<g className="t">
								<path
									className="d"
									d="M218.88 115.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="u">
							<g className="u">
								<path
									className="d"
									d="M218.88 175.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="v">
							<g className="v">
								<path
									className="d"
									d="M188.88 215.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="w">
							<g className="w">
								<path
									className="d"
									d="M118.88 235.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="x">
							<g className="x">
								<path
									className="d"
									d="M58.88 205.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.13.13 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="y">
							<g className="y">
								<path
									className="d"
									d="M18.88 165.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="z">
							<g className="z">
								<path
									className="d"
									d="M28.88 85.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="aa">
							<g className="aa">
								<path
									className="d"
									d="M68.88 55.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="ab">
							<g className="ab">
								<path
									className="d"
									d="M108.88 15.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.13.13 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="ac">
							<g className="ac">
								<path
									className="d"
									d="M158.88 55.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="r">
						<g className="ad">
							<g className="ad">
								<path
									className="d"
									d="M118.88 105.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="ship">
						<path
							className="ae"
							d="M112 200a28.38 28.38 0 0 1-10.86-6.62 25.68 25.68 0 0 1-6.35-10.6l2.21-2.16s5.17.93 10.82 6.58 6.39 10.64 6.39 10.64zM137.89 173.11a23.93 23.93 0 0 1-10.54-5.93 21.92 21.92 0 0 1-5.68-10.28l2.31-2.31s5.18.57 10.5 5.89 5.71 10.33 5.71 10.33z"
						/>
						<path
							className="af"
							d="M114 196.3a32.76 32.76 0 0 0-6.49-9.31 29.65 29.65 0 0 0-9.07-6.25l19.1-19.09s4.87.64 10 5.74 5.57 9.82 5.57 9.82zM140.91 169.43a32.76 32.76 0 0 0-6.49-9.31 29.65 29.65 0 0 0-9.07-6.25l11.32-11.31s4.87.63 10 5.74 5.57 9.82 5.57 9.82z"
						/>
						<path
							className="ag"
							d="M154.348 168.727l19.799 19.799-29.699 29.698-19.799-19.799zM96.36 170.135l-19.8-19.798 29.699-29.699 19.799 19.799z"
						/>
						<path
							className="d"
							d="M154.34 165.9l-3.53 3.53-2.81-2.83 6.16-6.16a20.52 20.52 0 0 0-5.68-12.7l3.13-3.13a5 5 0 1 0-1.42-1.41l-3.12 3.12a20.59 20.59 0 0 0-12.7-5.68l-6.17 6.16-2.85-2.8 3.54-3.53-22.63-22.63-32.53 32.5L96.36 173l3.54-3.54 2.83 2.83-9.9 9.9s.65 5.6 6.56 11.82l-1 1a5 5 0 1 0 1.42 1.41l1-1c6.18 5.77 11.83 6.57 11.83 6.57l9.9-9.9 2.82 2.83-3.53 3.53 22.63 22.63L177 188.52zm-72.83-12L78 150.34l3.53-3.54 3.54 3.54zm4.95-5l-3.53-3.53 3.53-3.54 3.54 3.56zm5-4.95l-3.53-3.53 3.53-3.54 3.54 3.56zm5-4.95l-3.53-3.53 3.43-3.47 3.54 3.54zm5-4.94l-3.53-3.54 3.53-3.54 3.54 3.54zm5-5l-3.53-3.54 3.53-3.54 3.54 3.54zm-19.8 29.69l-3.53-3.53 3.53-3.54 3.34 3.61zm5-4.95l-3.53-3.53 3.53-3.54 3.34 3.61zm5-5l-3.53-3.53 3.53-3.54 3.54 3.54zm5-4.95l-3.53-3.53 3.53-3.54 3.54 3.54zm5-4.95l-3.53-3.53 3.53-3.54 3.54 3.54zm4.95-4.94l-3.53-3.54 3.53-3.54 3.54 3.54zm-19.8 29.69l-3.53-3.53 3.53-3.54 3.19 3.66zm5-5l-3.53-3.53 3.53-3.54 3.54 3.54zm5-4.95l-3.53-3.53 3.53-3.54 3.54 3.54zm5-5l-3.53-3.53 3.53-3.54 3.54 3.54zm4.95-4.95l-3.53-3.53 3.53-3.54 3.54 3.54zm5-4.95l-3.53-3.53 3.53-3.54 3.54 3.54zm-19.8 29.7l-3.53-3.53 3.53-3.54 3.54 3.54zm5-4.95l-3.53-3.53 3.53-3.54 3.54 3.54zm5-5l-3.53-3.53 3.53-3.54 3.54 3.54zm4.95-4.95l-3.53-3.53 3.53-3.54 3.54 3.54zm5-5l-3.53-3.53 3.53-3.54 3.54 3.54zm5-4.95l-3.53-3.53 3.53-3.54 3.54 3.54zm1.42 8.49l-3 3-4 4-.7.71-9.9 9.9-3.73-2.44 21.21-21.21 2.83 2.82zm.91 3.33a20.35 20.35 0 0 1 3.3.94l-2.7 2.7a17.48 17.48 0 0 1-1.25-3zm-3 3c.26.64.58 1.36 1 2.14a20.19 20.19 0 0 0-2.34-.79zm-8.75 39.86a24 24 0 0 1-8.77-5.37l1.23-1.23c1.71 1.51 3.36 2.3 3.87 1.79s-.52-2.65-2.48-4.6-4-3.06-4.59-2.48.27 2.16 1.79 3.87l-1.24 1.24a22.71 22.71 0 0 1-5.39-8.75l.65-.65a19.69 19.69 0 0 1 10.32 5.47 18.68 18.68 0 0 1 5.3 10zm3.2-3.2a21.9 21.9 0 0 0-5.69-9.63 22.59 22.59 0 0 0-10.74-5.5l17.32-17.32a18.79 18.79 0 0 1 10.09 5.27l.18.19a18.49 18.49 0 0 1 5.29 10.09zm10.74-33.37l4-4a19.73 19.73 0 0 1 2.5 1.73l-4.61 4.62a27.32 27.32 0 0 1-2.68-2.04zm4.72 5.19l4.63-4.64a19.61 19.61 0 0 1 1.76 2.48l-4 4a28.74 28.74 0 0 1-3.18-1.53zm4.29 8.43a18.61 18.61 0 0 0-.82-2.41 21.7 21.7 0 0 0 2.21 1zm3.72-3.72a19.66 19.66 0 0 1-3-1.26l2.74-2.75a18.58 18.58 0 0 1 .93 3.32zm3.19-3.19a21.8 21.8 0 0 0-5.68-9.64 22.59 22.59 0 0 0-9.95-5.84l9.54-9.54A19.47 19.47 0 0 1 151 159.31zm-14.09 24l-2.82-2.83 9.9-9.9.7-.71 4-4 3-3 3.54-3.54 2.83 2.83zm1.34 9.53l-3.54-3.54 3.54-3.53 3.53 3.53zm5-5l-3.6-3.53 3.54-3.53 3.53 3.53zm4.95-4.95l-3.55-3.53 3.5-3.52 3.53 3.53zm4.95-4.95l-3.54-3.54 3.54-3.53 3.53 3.53zm5-5l-3.54-3.54 3.54-3.53 3.53 3.53zm4.94-4.95l-3.53-3.54 3.53-3.53 3.54 3.53zm-19.79 29.7l-3.65-3.48 3.54-3.53 3.53 3.53zm4.85-4.85l-3.5-3.58 3.54-3.53 3.53 3.53zm4.95-5l-3.54-3.54 3.54-3.53 3.53 3.53zm5-4.95l-3.54-3.54 3.49-3.51 3.53 3.53zm4.94-4.95l-3.53-3.54 3.53-3.53 3.54 3.53zm4.95-5l-3.53-3.54 3.53-3.53 3.54 3.53zm-19.79 29.7l-3.55-3.48 3.54-3.53 3.53 3.53zm4.95-5l-3.54-3.54 3.54-3.53 3.53 3.53zm5-4.95l-3.54-3.54 3.54-3.53 3.53 3.53zm4.94-5l-3.53-3.54 3.53-3.53 3.54 3.53zm4.95-4.95l-3.53-3.54 3.53-3.53 3.54 3.53zm5-4.95l-3.53-3.54 3.53-3.53 3.54 3.53zm-19.79 29.7l-3.54-3.54 3.54-3.53 3.53 3.53zm5-4.95l-3.54-3.54 3.54-3.53 3.53 3.53zm4.94-5l-3.53-3.54 3.53-3.53 3.54 3.53zm4.95-4.95l-3.53-3.54 3.53-3.53 3.54 3.53zm5-5l-3.53-3.54 3.53-3.53 3.54 3.53zm4.95-4.95l-3.53-3.54 3.53-3.53 3.54 3.53z"
						/>
						<circle
							className="d wave"
							cx="154.4"
							cy="140.4"
							r="3.9"
						/>
					</g>
				</svg>
			);
		case 'success':
			return (
				<svg
					className="success-state-animation"
					viewBox="0 0 250 250"
					xmlSpace="preserve"
				>
					<circle cx="125" cy="125" fill="#e6e6eb" r="125" />
					<defs>
						<path d="M217 72h8.1v8.1H217z" id="a" />
					</defs>
					<clipPath id="ci">
						<use xlinkHref="#a" />
					</clipPath>
					<g clipPath="url(#ci)">
						<defs>
							<path d="M217 72h8.1v8.1H217z" id="cu" />
						</defs>
						<clipPath id="f">
							<use xlinkHref="#cu" />
						</clipPath>
						<path
							clipPath="url(#f)"
							d="m220.8 79.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M169 35h8.1v8.1H169z" id="ac" />
					</defs>
					<clipPath id="cm">
						<use xlinkHref="#ac" />
					</clipPath>
					<g clipPath="url(#cm)">
						<defs>
							<path d="M169 35h8.1v8.1H169z" id="n" />
						</defs>
						<clipPath id="cd">
							<use xlinkHref="#n" />
						</clipPath>
						<path
							clipPath="url(#cd)"
							d="m172.8 42.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M53 48h8.1v8.1H53z" id="r" />
					</defs>
					<clipPath id="cf">
						<use xlinkHref="#r" />
					</clipPath>
					<g clipPath="url(#cf)">
						<defs>
							<path d="M53 48h8.1v8.1H53z" id="aw" />
						</defs>
						<clipPath id="b">
							<use xlinkHref="#aw" />
						</clipPath>
						<path
							clipPath="url(#b)"
							d="m56.8 55.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M207 127h8.1v8.1H207z" id="s" />
					</defs>
					<clipPath id="bh">
						<use xlinkHref="#s" />
					</clipPath>
					<g clipPath="url(#bh)">
						<defs>
							<path d="M207 127h8.1v8.1H207z" id="ap" />
						</defs>
						<clipPath id="i">
							<use xlinkHref="#ap" />
						</clipPath>
						<path
							clipPath="url(#i)"
							d="m210.8 134.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M54 171h8.1v8.1H54z" id="ay" />
					</defs>
					<clipPath id="ag">
						<use xlinkHref="#ay" />
					</clipPath>
					<g clipPath="url(#ag)">
						<defs>
							<path d="M54 171h8.1v8.1H54z" id="cc" />
						</defs>
						<clipPath id="bw">
							<use xlinkHref="#cc" />
						</clipPath>
						<path
							clipPath="url(#bw)"
							d="m57.8 178.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M13 141h8.1v8.1H13z" id="aa" />
					</defs>
					<clipPath id="ca">
						<use xlinkHref="#aa" />
					</clipPath>
					<g clipPath="url(#ca)">
						<defs>
							<path d="M13 141h8.1v8.1H13z" id="bb" />
						</defs>
						<clipPath id="av">
							<use xlinkHref="#bb" />
						</clipPath>
						<path
							clipPath="url(#av)"
							d="m16.8 148.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M36 97h8.1v8.1H36z" id="bj" />
					</defs>
					<clipPath id="bz">
						<use xlinkHref="#bj" />
					</clipPath>
					<g clipPath="url(#bz)">
						<defs>
							<path d="M36 97h8.1v8.1H36z" id="y" />
						</defs>
						<clipPath id="ck">
							<use xlinkHref="#y" />
						</clipPath>
						<path
							clipPath="url(#ck)"
							d="m39.8 104.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M192 183h8.1v8.1H192z" id="ar" />
					</defs>
					<clipPath id="bc">
						<use xlinkHref="#ar" />
					</clipPath>
					<g clipPath="url(#bc)">
						<defs>
							<path d="M192 183h8.1v8.1H192z" id="am" />
						</defs>
						<clipPath id="bf">
							<use xlinkHref="#am" />
						</clipPath>
						<path
							clipPath="url(#bf)"
							d="m195.8 190.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M155 112h8.1v8.1H155z" id="bi" />
					</defs>
					<clipPath id="ao">
						<use xlinkHref="#bi" />
					</clipPath>
					<g clipPath="url(#ao)">
						<defs>
							<path d="M155 112h8.1v8.1H155z" id="bg" />
						</defs>
						<clipPath id="bx">
							<use xlinkHref="#bg" />
						</clipPath>
						<path
							clipPath="url(#bx)"
							d="m158.8 119.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M107.1 26h8.1v8.1h-8.1z" id="az" />
					</defs>
					<clipPath id="bp">
						<use xlinkHref="#az" />
					</clipPath>
					<g clipPath="url(#bp)">
						<defs>
							<path d="M107.1 26h8.1v8.1h-8.1z" id="j" />
						</defs>
						<clipPath id="u">
							<use xlinkHref="#j" />
						</clipPath>
						<path
							clipPath="url(#u)"
							d="m110.9 33.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.5.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M95 81h8.1v8.1H95z" id="ce" />
					</defs>
					<clipPath id="ah">
						<use xlinkHref="#ce" />
					</clipPath>
					<g clipPath="url(#ah)">
						<defs>
							<path d="M95 81h8.1v8.1H95z" id="t" />
						</defs>
						<clipPath id="bn">
							<use xlinkHref="#t" />
						</clipPath>
						<path
							clipPath="url(#bn)"
							d="m98.8 88.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M163 224h8.1v8.1H163z" id="v" />
					</defs>
					<clipPath id="as">
						<use xlinkHref="#v" />
					</clipPath>
					<g clipPath="url(#as)">
						<defs>
							<path d="M163 224h8.1v8.1H163z" id="at" />
						</defs>
						<clipPath id="c">
							<use xlinkHref="#at" />
						</clipPath>
						<path
							clipPath="url(#c)"
							d="m166.8 231.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<defs>
						<path d="M83 219h8.1v8.1H83z" id="ax" />
					</defs>
					<clipPath id="l">
						<use xlinkHref="#ax" />
					</clipPath>
					<g clipPath="url(#l)">
						<defs>
							<path d="M83 219h8.1v8.1H83z" id="aj" />
						</defs>
						<clipPath id="ak">
							<use xlinkHref="#aj" />
						</clipPath>
						<path
							clipPath="url(#ak)"
							d="m86.8 226.9-.6-2.3c-.1-.4-.4-.7-.8-.8l-2.3-.6c-.2-.1-.2-.4 0-.5l2.3-.6c.4-.1.7-.4.8-.8l.6-2.3c.1-.2.4-.2.5 0l.6 2.3c.1.4.4.7.8.8l2.3.6c.2.1.2.4 0 .5l-2.3.6c-.4.1-.7.4-.8.8l-.6 2.3c-.1.2-.4.2-.5 0"
							fill="#7b7c8e"
						/>
					</g>
					<g className="st27">
						<defs>
							<path d="M206 50h4v4h-4z" id="cl" />
						</defs>
						<clipPath id="be">
							<use xlinkHref="#cl" />
						</clipPath>
						<g clipPath="url(#be)">
							<defs>
								<path d="M206 50h4v4h-4z" id="aq" />
							</defs>
							<clipPath id="an">
								<use xlinkHref="#aq" />
							</clipPath>
							<path
								clipPath="url(#an)"
								d="m207.9 53.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M216 110h4v4h-4z" id="cg" />
						</defs>
						<clipPath id="ct">
							<use xlinkHref="#cg" />
						</clipPath>
						<g clipPath="url(#ct)">
							<defs>
								<path d="M216 110h4v4h-4z" id="bm" />
							</defs>
							<clipPath id="cr">
								<use xlinkHref="#bm" />
							</clipPath>
							<path
								clipPath="url(#cr)"
								d="m217.9 113.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M216 170h4v4h-4z" id="au" />
						</defs>
						<clipPath id="bl">
							<use xlinkHref="#au" />
						</clipPath>
						<g clipPath="url(#bl)">
							<defs>
								<path d="M216 170h4v4h-4z" id="k" />
							</defs>
							<clipPath id="bu">
								<use xlinkHref="#k" />
							</clipPath>
							<path
								clipPath="url(#bu)"
								d="m217.9 173.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M186 210h4v4h-4z" id="ad" />
						</defs>
						<clipPath id="bk">
							<use xlinkHref="#ad" />
						</clipPath>
						<g clipPath="url(#bk)">
							<defs>
								<path d="M186 210h4v4h-4z" id="ai" />
							</defs>
							<clipPath id="cj">
								<use xlinkHref="#ai" />
							</clipPath>
							<path
								clipPath="url(#cj)"
								d="m187.9 213.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M116 230h4v4h-4z" id="br" />
						</defs>
						<clipPath id="by">
							<use xlinkHref="#br" />
						</clipPath>
						<g clipPath="url(#by)">
							<defs>
								<path d="M116 230h4v4h-4z" id="bt" />
							</defs>
							<clipPath id="cn">
								<use xlinkHref="#bt" />
							</clipPath>
							<path
								clipPath="url(#cn)"
								d="m117.9 233.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M56 200h4v4h-4z" id="co" />
						</defs>
						<clipPath id="cb">
							<use xlinkHref="#co" />
						</clipPath>
						<g clipPath="url(#cb)">
							<defs>
								<path d="M56 200h4v4h-4z" id="cq" />
							</defs>
							<clipPath id="bq">
								<use xlinkHref="#cq" />
							</clipPath>
							<path
								clipPath="url(#bq)"
								d="m57.9 203.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M16 160h4v4h-4z" id="al" />
						</defs>
						<clipPath id="ch">
							<use xlinkHref="#al" />
						</clipPath>
						<g clipPath="url(#ch)">
							<defs>
								<path d="M16 160h4v4h-4z" id="af" />
							</defs>
							<clipPath id="x">
								<use xlinkHref="#af" />
							</clipPath>
							<path
								clipPath="url(#x)"
								d="m17.9 163.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M26 80h4v4h-4z" id="bo" />
						</defs>
						<clipPath id="p">
							<use xlinkHref="#bo" />
						</clipPath>
						<g clipPath="url(#p)">
							<defs>
								<path d="M26 80h4v4h-4z" id="d" />
							</defs>
							<clipPath id="m">
								<use xlinkHref="#d" />
							</clipPath>
							<path
								clipPath="url(#m)"
								d="m27.9 83.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M66 50h4v4h-4z" id="g" />
						</defs>
						<clipPath id="bd">
							<use xlinkHref="#g" />
						</clipPath>
						<g clipPath="url(#bd)">
							<defs>
								<path d="M66 50h4v4h-4z" id="cp" />
							</defs>
							<clipPath id="h">
								<use xlinkHref="#cp" />
							</clipPath>
							<path
								clipPath="url(#h)"
								d="m67.9 53.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M106 10h4v4h-4z" id="cs" />
						</defs>
						<clipPath id="bv">
							<use xlinkHref="#cs" />
						</clipPath>
						<g clipPath="url(#bv)">
							<defs>
								<path d="M106 10h4v4h-4z" id="z" />
							</defs>
							<clipPath id="ba">
								<use xlinkHref="#z" />
							</clipPath>
							<path
								clipPath="url(#ba)"
								d="m107.9 13.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M156 50h4v4h-4z" id="o" />
						</defs>
						<clipPath id="ae">
							<use xlinkHref="#o" />
						</clipPath>
						<g clipPath="url(#ae)">
							<defs>
								<path d="M156 50h4v4h-4z" id="w" />
							</defs>
							<clipPath id="e">
								<use xlinkHref="#w" />
							</clipPath>
							<path
								clipPath="url(#e)"
								d="m157.9 53.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<g className="st27">
						<defs>
							<path d="M116 100h4v4h-4z" id="q" />
						</defs>
						<clipPath id="ab">
							<use xlinkHref="#q" />
						</clipPath>
						<g clipPath="url(#ab)">
							<defs>
								<path d="M116 100h4v4h-4z" id="bs" />
							</defs>
							<clipPath id="cv">
								<use xlinkHref="#bs" />
							</clipPath>
							<path
								clipPath="url(#cv)"
								d="m117.9 103.9-.3-1.1c0-.2-.2-.3-.4-.4l-1.1-.3c-.1 0-.1-.2 0-.2l1.1-.3c.2 0 .3-.2.4-.4l.3-1.1c0-.1.2-.1.2 0l.3 1.1c0 .2.2.3.4.4l1.1.3c.1 0 .1.2 0 .2l-1.1.3c-.2 0-.3.2-.4.4l-.3 1.1c0 .1-.2.1-.2 0"
								fill="#7b7c8e"
							/>
						</g>
					</g>
					<path
						d="M140.6 179.3c-6.5 6.5-15.3 7-15.3 7s-8.2-.5-14.7-7-5-40-5-51 15-33 20-33 20 20 20 31 1.5 46.5-5 53z"
						fill="#f1f2f5"
					/>
					<path
						className="st53"
						d="M158.6 166.3c-1.5-4.5-7.5-10.1-10.4-12.7.3-3.9.4-8.4.4-13.3 0-28-18-47-23-47s-23 19-23 47c0 4.9.1 9.3.4 13.3-2.9 2.5-9 8.2-10.5 12.7-2 6 0 16 0 16s7-5.2 14.4-5.9c2.7 7.7 5.7 8.9 5.7 8.9s.7.5 2.1 1.1c-.1.2-.1.4-.1.6v.5c0 1.5 1.2 2.7 2.7 2.7h16.5c1.5 0 2.7-1.2 2.7-2.7v-.5c0-.2 0-.4-.1-.6 1.4-.6 2.1-1.1 2.1-1.1s3-1.2 5.7-8.9c7.4.7 14.3 5.9 14.3 5.9s2.1-10 .1-16zm-21.7 15.4-.2.1-.4.4c-.4.2-3.7 2.2-10.6 2.2s-10.2-2-10.6-2.2l-.3-.3-.3-.1c-.8-.7-7.8-7.5-7.8-41.4 0-24.5 14.8-41.1 19-42.9 4.2 1.8 19 18.4 19 42.9-.1 33.2-6.8 40.4-7.8 41.3z"
					/>
					<path
						className="st53"
						d="M126.5 182.3h-1.9c-.6 0-1.1-.5-1-1.1l.9-28.9c0-.6.5-1 1-1 .6 0 1 .4 1 1l.9 28.9c.2.7-.3 1.1-.9 1.1zM126.1 121.3c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5c0-3.5 2.9-6.5 6.5-6.5m0-4c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5z"
					/>
					<circle cx="126.1" cy="201.8" fill="#fff" r="10.4" />
					<circle
						className="d2 smoke"
						cx="126.1"
						cy="201.8"
						r="10.4"
					/>
					<circle
						className="d3 smoke"
						cx="126.1"
						cy="201.8"
						r="10.4"
					/>
					<circle
						className="d4 smoke"
						cx="126.1"
						cy="201.8"
						r="10.4"
					/>
					<circle className="smoke" cx="126.1" cy="201.8" r="10.4" />
				</svg>
			);
		case 'search':
			return (
				<svg className="search-state-animation" viewBox="0 0 250 250">
					<defs>
						<clipPath id="a">
							<path
								className="a"
								d="M217.01 71.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="c">
							<path
								className="a"
								d="M169.01 34.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="e">
							<path
								className="a"
								d="M53.01 47.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="g">
							<path
								className="a"
								d="M207.01 126.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="i">
							<path
								className="a"
								d="M54.01 170.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="k">
							<path
								className="a"
								d="M43.01 140.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="m">
							<path
								className="a"
								d="M114.01 130.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="o">
							<path
								className="a"
								d="M36.01 96.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="q">
							<path
								className="a"
								d="M192.01 182.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="s">
							<path
								className="a"
								d="M155.01 111.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="u">
							<path
								className="a"
								d="M107.07 26.04h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="v">
							<path
								className="a"
								d="M107.07 26.04h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="w">
							<path
								className="a"
								d="M95.01 80.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="y">
							<path
								className="a"
								d="M163.01 223.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="aa">
							<path
								className="a"
								d="M83.01 218.99h8.05v8.05h-8.05z"
							/>
						</clipPath>
						<clipPath id="ac">
							<path className="a" d="M211 47h3.99v3.99H211z" />
						</clipPath>
						<clipPath id="ae">
							<path className="a" d="M221 107h3.99v3.99H221z" />
						</clipPath>
						<clipPath id="ag">
							<path className="a" d="M221 167h3.99v3.99H221z" />
						</clipPath>
						<clipPath id="ai">
							<path className="a" d="M191 207h3.99v3.99H191z" />
						</clipPath>
						<clipPath id="ak">
							<path className="a" d="M121 227h3.99v3.99H121z" />
						</clipPath>
						<clipPath id="am">
							<path className="a" d="M61 197h3.99v3.99H61z" />
						</clipPath>
						<clipPath id="ao">
							<path className="a" d="M21 157h3.99v3.99H21z" />
						</clipPath>
						<clipPath id="aq">
							<path className="a" d="M31 77h3.99v3.99H31z" />
						</clipPath>
						<clipPath id="as">
							<path className="a" d="M71 47h3.99v3.99H71z" />
						</clipPath>
						<clipPath id="au">
							<path className="a" d="M111 7h3.99v3.99H111z" />
						</clipPath>
						<clipPath id="aw">
							<path className="a" d="M161 47h3.99v3.99H161z" />
						</clipPath>
						<clipPath id="ay">
							<path className="a" d="M121 97h3.99v3.99H121z" />
						</clipPath>
					</defs>
					<circle cx="125" cy="125" fill="#e6e6eb" r="125" />
					<g className="c star">
						<g className="c">
							<path
								className="d"
								d="M220.79 79.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="e">
						<g className="e">
							<path
								className="d"
								d="M172.79 42.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="f">
						<g className="f">
							<path
								className="d"
								d="M56.79 55.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="g">
						<g className="g">
							<path
								className="d"
								d="M210.79 134.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="h">
						<g className="h">
							<path
								className="d"
								d="M57.79 178.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="i">
						<g className="i">
							<path
								className="d"
								d="M46.79 148.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="j">
						<g className="j">
							<path
								className="d"
								d="M117.79 138.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="k">
						<g className="k">
							<path
								className="d"
								d="M39.79 104.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="l">
						<g className="l">
							<path
								className="d"
								d="M195.79 190.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="m">
						<g className="m">
							<path
								className="d"
								d="M158.79 119.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g clipPath="url(#u)">
						<g clipPath="url(#v)">
							<path
								className="d"
								d="M110.86 33.9l-.58-2.27a1 1 0 0 0-.76-.75l-2.27-.58a.24.24 0 0 1 0-.47l2.27-.58a1.06 1.06 0 0 0 .76-.76l.58-2.27a.24.24 0 0 1 .47 0l.58 2.27a1 1 0 0 0 .76.76l2.27.58a.24.24 0 0 1 0 .47l-2.27.58a1 1 0 0 0-.76.75l-.58 2.27a.24.24 0 0 1-.47 0"
							/>
						</g>
					</g>
					<g className="p">
						<g className="p">
							<path
								className="d"
								d="M98.79 88.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="q">
						<g className="q">
							<path
								className="d"
								d="M166.79 231.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="r">
						<g className="r">
							<path
								className="d"
								d="M86.79 226.86l-.57-2.27a1.08 1.08 0 0 0-.76-.76l-2.27-.57a.25.25 0 0 1 0-.48l2.27-.57a1.08 1.08 0 0 0 .76-.76l.57-2.27a.25.25 0 0 1 .48 0l.57 2.27a1.08 1.08 0 0 0 .76.76l2.27.57a.25.25 0 0 1 0 .48l-2.27.57a1.08 1.08 0 0 0-.76.76l-.57 2.27a.25.25 0 0 1-.48 0"
							/>
						</g>
					</g>
					<g className="s">
						<g className="t">
							<g className="t">
								<path
									className="d"
									d="M212.88 50.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="u">
							<g className="u">
								<path
									className="d"
									d="M222.88 110.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="v">
							<g className="v">
								<path
									className="d"
									d="M222.88 170.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="w">
							<g className="w">
								<path
									className="d"
									d="M192.88 210.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="x">
							<g className="x">
								<path
									className="d"
									d="M122.88 230.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="y">
							<g className="y">
								<path
									className="d"
									d="M62.88 200.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.13.13 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="z">
							<g className="z">
								<path
									className="d"
									d="M22.88 160.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="aa">
							<g className="aa">
								<path
									className="d"
									d="M32.88 80.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.13.13 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="ab">
							<g className="ab">
								<path
									className="d"
									d="M72.88 50.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="ac">
							<g className="ac">
								<path
									className="d"
									d="M112.88 10.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.12.12 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.13.13 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="ad">
							<g className="ad">
								<path
									className="d"
									d="M162.88 50.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="s">
						<g className="ae">
							<g className="ae">
								<path
									className="d"
									d="M122.88 100.9l-.28-1.13a.53.53 0 0 0-.38-.37l-1.13-.29a.12.12 0 0 1 0-.23l1.13-.29a.52.52 0 0 0 .38-.38l.28-1.12a.13.13 0 0 1 .24 0l.28 1.12a.52.52 0 0 0 .38.38l1.13.29a.12.12 0 0 1 0 .23l-1.13.29a.53.53 0 0 0-.38.37l-.28 1.13a.12.12 0 0 1-.24 0"
								/>
							</g>
						</g>
					</g>
					<g className="scope">
						<g>
							<path
								className="st55"
								d="M112.8,164.6L53,199.2l-30.2,11.7l-7-12.1l26.1-20.9l58.8-34.1L112.8,164.6L112.8,164.6z"
							/>
							<path
								className="st3"
								d="M102.3,140.6l-63.2,36.6l-6.3,7.1l-9.4,7.2l-1.2-1.6c-0.4-0.7-1.3-1-2.1-0.6l-5.5,3.2c-0.5,0.3-0.7,1-0.4,1.5
  l0.4,0.7c0.3,0.5,1,0.7,1.5,0.4c0,0,0,0,0,0l4.1-2.4l0.6,0.8l-5.6,4.3c-0.5,0.4-0.8,1-0.9,1.7l-0.4,9.7c0,1,0.1,1.9,0.4,2.9
  l-2.7,0.7c-1,0.1-1.7,1.1-1.6,2.1c0,0.2,0.1,0.5,0.2,0.7l2.6,4.4c0.5,0.9,1.6,1.2,2.5,0.7c0.3-0.2,0.5-0.4,0.7-0.7l1.3-2.3v-0.1
  c0.4,0.5,1.1,0.7,1.7,0.3c0.2-0.1,0.4-0.3,0.5-0.5l2.9-5l21.4-8.9l9.3-1.9l63.2-36.6L102.3,140.6z M39.6,201.9l-15.8,6.6l-5.4-9.3
  l4.4-3.4l1.5,1.8c0.3,0.4,0.8,0.5,1.2,0.2l1-0.6c0.5-0.3,0.6-0.9,0.3-1.4c0,0,0,0,0,0l-1.5-2l6.8-5.1L39.6,201.9z M77.6,183.8
  l-23.4,13.5l-11-19l23.3-13.6L77.6,183.8z M111.9,164l-31.6,18.3l-11-19l31.6-18.3L111.9,164z"
							/>
						</g>
						<g className="tele">
							<path
								className="st3"
								d="M122.4,125.5L88.7,145l-6.3,7.1l14,24.2l9.3-1.9l33.8-19.5c2.4-1.4,3.2-4.4,1.8-6.8c0,0,0,0,0,0l-12-20.8
  C127.9,124.9,124.8,124.1,122.4,125.5z"
							/>
							<polygon
								className="st56"
								points="129,157.2 106.9,170 93.1,146.2 115.2,133.4 	"
							/>
						</g>
					</g>
					<path
						className="st3"
						d="M76.1,246.3L63.6,212h0.9c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5h-6c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5
  h0.7l-12.5,34.3c-0.4,1,0.2,2.2,1.2,2.6c1,0.4,2.2-0.2,2.6-1.2l11-30.1l11,30.1c0.4,1,1.5,1.6,2.6,1.2c1-0.4,1.6-1.5,1.2-2.6l0,0
  H76.1z"
					/>
					<path className="st55" d="M59,181h5v24h-5V181z" />
					<path
						className="st3"
						d="M61.5,182c0.8,0,1.5,0.7,1.5,1.5v19c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5v-19C60,182.7,60.7,182,61.5,182
  M61.5,179c-2.5,0-4.5,2-4.5,4.5c0,0,0,0,0,0v19c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5v-19C66,181,64,179,61.5,179
  C61.5,179,61.5,179,61.5,179z"
					/>
				</svg>
			);
		default:
			return null;
	}
}
