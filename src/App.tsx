import React from 'react';
import { Card, CardContent, List, ListItem, Grid } from '@material-ui/core';
import { Question } from './types';

export default function App() {
  const questions: Question[] = [
    {
      context: "1번문제: lack에 넣는 카드가 틀린것은?\n",
      example: [
        "1:FXO\n",
        "2:FXS\n",
        "3:R/D\n",
        "4:FXR",
      ],
      answer: 3
    },
    {
      context: "2번문제:전화기 등급으로 올바른 것은? ",
      example: [
        "1: 0등급-S\n",
        "2: 2등급-A\n",
        "3: 1등급-A\n",
        "4: 2등급-C",
      ],
      answer: 2,
    },
  ]

  return (
    <Grid container spacing={2}>
      {questions.map(qu =>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              {qu.context}
              <List>
                {qu.example.map((ex, index) =>
                  <ListItem button
                    onClick={() => alert(index === qu.answer ? '정답' : '오답')}
                  >{ex}</ListItem>)}
              </List>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}
