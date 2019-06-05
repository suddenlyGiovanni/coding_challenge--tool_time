import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'

// Material UI
import Grid from '@material-ui/core/Grid'
import { pollsSelectors, pollsActions } from 'features/polls'
import { Question } from 'components/question/Question'
import { BodyWrapper } from 'components/body-wrapper/BodyWrapper'

function mapStateToProps(state: RootState) {
  return { questions: pollsSelectors.getQuestions(state) }
}

const mapDispatchToProps = { fetchQuestions: pollsActions.fetchQuestions }

type ReduxProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

type Props = RouteChildrenProps & ReduxProps

export const Fallback: React.FC = () => {
  // TODO: provide a better fallback
  return <div>Loading</div>
}

export class QuestionsView extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchQuestions()
  }

  public handleSelection = (url: string): void => this.props.history.push(url)
  public render() {
    const { questions } = this.props

    if (!questions) return Fallback

    return (
      <BodyWrapper title={'Questions'}>
        <Grid container spacing={3}>
          {questions.map(({ choices, published_at, question, url }) => {
            return (
              <Grid key={url} item md={4} sm={6} xs={12}>
                <Question
                  question={question}
                  numberOfChoices={choices.length}
                  publishedAt={published_at}
                  onClick={() => this.handleSelection(url)}
                />
              </Grid>
            )
          })}
        </Grid>
      </BodyWrapper>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsView)
