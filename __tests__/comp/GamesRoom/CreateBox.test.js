import React from 'react'
import { render } from '@testing-library/react-native'
import CreateBox from '../../../src/comp/gamesRoom/CreateBox'

describe('CreateBox comp tests', function () {
    test('render CreateBox comp with given navigation', function () {
        const { baseElement } = render(<CreateBox />)
        expect(baseElement).toBeDefined()
    })
})