<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

/**
 * @Route("/customer/product")
 */
class ProductCustomerController extends AbstractController
{
    /**
     * @Route("/")
     * @Template
     */
    public function index(  ): array
    {
        return[
   
        ];
    }

    /**
     * @Route("/mobility")
     * @Template
     */
    public function show(ProductRepository $productRepository): array
    {
        return [
            'products' => $productRepository->findAll()
        ];
    }
}
