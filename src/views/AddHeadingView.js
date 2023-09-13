import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OutFrame from '../components/OutFrame';

function AddHeadingView() {
    return (
        <OutFrame>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80%', backgroundColor: '#54849A', margin: 10, color: 'white', borderRadius: 10 }}>
                    <p style={{ textAlign: 'center' }} className="PageHeading">Show all study materials</p>
                    <p style={{ textAlign: 'center' }} className="CourseHeading">Add Heading</p>
                </div>
                <div style={{ backgroundColor: "white", width: '90%', padding: 10 }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Heading name</Form.Label>
                            <Form.Control type="text" placeholder="Enter the new heading component" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Interactive video" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Pop quiz" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Quiz" />
                        </Form.Group>
                        <Button className='cardButton' type="submit">
                            Save
                        </Button>
                    </Form>
                </div>
            </div>


        </OutFrame>


    );
}

export default AddHeadingView;