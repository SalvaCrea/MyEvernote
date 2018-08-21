<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Note;

class NoteController extends AbstractController
{
    /**
     * Instance of Note
     *
     * @var EntityManager
     */
    private $_entityManager;

    public function __construct()
    {

    }
    /**
     * @Route("/add-note", name="add-note")
     */
    public function add()
    {
        $entityManager = $this->getDoctrine()->getManager();

        $note = new Note();

        $note
            ->setName('test')
            ->setCreated(new \DateTime(\date("Y-m-d H:i:s")))
            ->setUserId(1)
            ->setContent('content');

        $entityManager
            ->persist($note);

        $entityManager
            ->flush();
        
        return new JsonResponse('ok');
    }
    /**
     * @Route("/modify-note", name="modify-note")
     */
    public function modifyAction()
    {

    }
     /**
     * @Route("/remove-note", name="remove-note")
     */
    public function removeAction()
    {

    }
}
